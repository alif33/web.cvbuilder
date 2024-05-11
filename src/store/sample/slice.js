import { createSlice } from "@reduxjs/toolkit"

export const sampleSlice = createSlice({
    name: "sample",
    initialState: {
        heading: {
            firstName: "",
            surName: "",
            city: "",
            country: "",
            postalCode: "",
            address: "",
            phone: "",
            email: "",
            linkedin: ""
        },
        // Text area
        summary: {heading: "Summary", body: ""},
        objective: {heading: "Objectives", body: ""},
        declaration: {heading: "Declaration", body: ""},
        expertise: {heading: "Expertise", body: ""},
        educations: [],
        experiences: [],
        skills: [],
        references: [],
        personal: {fatherName: "", motherName: "", permanentAddress: "", nationality: "", nid: "", religion: "", dob: "", sex: "", maritalStatus: "", bloodGroup: ""},
        passport: {
            number: "",
            issueDate: "",
            expiryDate: ""
        },
        layout: {
            primaryLeft: ["contacts"],
            primaryRight: ["summary", "education", "experience"],
            secondaryLeft: [],
            secondaryRight: [],
            tertiaryLeft: [],
            tertiaryRight: []
        },
        image: {},
        signature: {},
        templateName: "aoc"
    },

    reducers: {

        // for nested obj
        onValueChange: (state, action)=>{
            const field = action.payload.field
            const property = action.payload.property
            const value = action.payload.value
            state[field][property] = value
        },

        onListChange: (state, action)=>{
            const field = action.payload.field
            const item = action.payload.item
            state[field].push(item)
        },

        setList: (state, action)=>{
            const field = action.payload.field
            const list = action.payload.list
            state[field] = list
        },

        updateItem: (state, action)=>{
            const field = action.payload.field
            const index = action.payload.index
            const property = action.payload.property
            const value = action.payload.value
            state[field][index][property] = value
        },

        removeItem: (state, action)=>{
            const field = action.payload.field
            const index = action.payload.index
            state[field].splice(index, 1)
        },
        
        // for single value that is directly next state 
        onChange: (state, action)=>{
            state[action.payload.field] = action.payload.value
        },

        removeExperience: (state, action) => {
            state.experiences.splice(action.payload, 1)
        },

        removeEducation: (state, action) => {
            state.educations.splice(action.payload, 1)
        },

        // References

        addReference: (state, action) => {
            state.references.push(action.payload)
        },

        orderReference: (state, action) => {
            state.references = action.payload
        },

        clearReference: (state) => {
            state.references = []
        },

        removeReference: (state, action) => {
            state.references.splice(action.payload, 1);
        },
        // Textarea 
        onTextarea: (state, action) => {
            const field = action.payload.field
            const property = action.payload.property
            const value = action.payload.value
            // state.summary = {heading: "Summary", body: ""}
            // state.declaration = {heading: "Declaration", body: ""}

            state[field][property] = value
       
        },

        // Image
        changeImage: (state, action) => {
            state.image = action.payload
        },

        // Signature
        changeSignature: (state, action) => {
            state.signature = action.payload
        },

        // Layout
        changeLayout: (state, action) => {
            state.layout[action.payload.position] = action.payload.value
        },

        dropSection: (state, action) => {
            const position = action.payload.position
            const section = action.payload.section

            if (state.layout[position] && state.layout[position].includes(section)) {
                state.layout[position] = state.layout[position].filter(val => val !== section)
            }
        },
        
        addSection: (state, action) => {
            const position = action.payload.position
            const section = action.payload.section
        
            if (!state.layout[position].includes(section)) {
                state.layout[position].push(section)
            }
        },

        fetchResume: (state, action)=>{
            const sections = ["heading", "summary", "objectives", "declaration", "expertise", "educations", "experiences", "skills", "references", "personal", "passport", "layout", "image", "signature", "templateName"]
            sections.forEach(section => {
                if (action.payload[section]) {
                    state[section] = action.payload[section]
                }
            })
        },

        updateResume: (state, action)=>{
            if(action.payload?.resume){
                const resume = action.payload.resume
                // Heading
                if (resume?.heading) {
                    if (resume?.heading?.firstName) {
                        state.heading.firstName = resume?.heading?.firstName
                    }
                    if (resume?.heading?.surName) {
                        state.heading.surName = resume?.heading?.surName
                    }
                    if (resume?.heading?.email) {
                        state.heading.email = resume?.heading?.email
                    }
                    if (resume?.heading?.phone) {
                        state.heading.phone = resume?.heading?.phone
                    }
                    
                }
                // Summary
                if (resume?.summary) {
                    state.summary = resume.summary
                }
            }
        }

    }
})