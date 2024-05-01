import { parseJSON } from "../../lib/jsonParser"
import { createSlice } from "@reduxjs/toolkit"

export const informationSlice = createSlice({
    name: "information",
    initialState: {
        hasLoading: false,
        heading: {
            firstName: "",
            surName: "",
            city: "",
            country: "",
            postalCode: "",
            phone: "",
            email: ""
        },
        experience: [{
            jobTitle: "",
            employer: "",
            jobCity: "",
            jobCountry: "",
            jobStartingDate: "",
            email: "",
            description: ""
        }],
        education: [{
            institutionName: "", 
            institutionLocation: "", 
            qualification: "", 
            studyField: "", 
            graduationYear: "",
            description: ""
        }],
        skills: "",
        summary: "",
        appear: {}
    },
    reducers: {
        setInfo: (state, action) => {
            const data = action.payload

            state.heading.firstName = data?.firstName || ""
            state.heading.surName = data?.surName || ""
            state.heading.country = data?.country || ""
            state.heading.city = data?.city || ""
            state.heading.phone = data?.phone || ""
            state.heading.email = data?.email || ""
            
            if(data?.experience.length>0){
                const experience = parseJSON(data?.experience)
                if (experience) {
                    state.experience = experience
                }
            }

            if(data?.education.length>0){
                const education = parseJSON(data?.education)
                if (education) {
                    state.education = education
                }
            }
            
            if(data?.skills && data?.skills.length>0){
                state.skills = JSON.parse(data?.skills)
            }
            
            if(data?.summary && data?.summary.length>0){
                state.summary = JSON.parse(data?.summary)
            }
        },
    }
})