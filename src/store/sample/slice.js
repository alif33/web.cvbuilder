import { createSlice } from "@reduxjs/toolkit"

export const sampleSlice = createSlice({
    name: "sample",
    initialState: {
        stage: "heading",
        heading: {
            firstName: "",
            surName: "",
            city: "",
            country: "",
            postalCode: "",
            phone: "",
            email: ""
        },
        experiences: [],
        educations: [],
        skills: [],
        summary: "",
    },

    reducers: {
        onStage: (state, action) => {
            state.stage = action.payload
        },

        changeHeading: (state, action) => {
            state.heading[action.payload.name] = action.payload.value
        },

        // Experience
        addExperience: (state, action) => {
            state.experiences.push(action.payload)
        },

        clearExperience: (state) => {
            state.experiences = []
        },

        removeExperience: (state, action) => {
            state.experiences.splice(action.payload, 1);
        },

        // Education

        addEducation: (state, action) => {
            state.educations.push(action.payload)
        },

        clearEducation: (state) => {
            state.educations = []
        },

        removeEducation: (state, action) => {
            state.educations.splice(action.payload, 1);
        },

        changeSummary: (state, action) => {
            state.summary = action.payload
        },
    }
})