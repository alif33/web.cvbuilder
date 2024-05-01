import { sampleSlice } from "./slice";
const { actions: slice } = sampleSlice;

export const onStage = (stage) => (dispatch) => {
    dispatch(slice.onStage(stage))
}

export const changeHeading = (name, value) => (dispatch) => {
    dispatch(slice.changeHeading({name, value}))
}

// Experience
export const addExperience = (experience) => (dispatch) => {
    dispatch(slice.addExperience(experience))
}

export const clearExperience = () => (dispatch) => {
    dispatch(slice.clearExperience())
}

export const removeExperience = (index) => (dispatch) => {
    dispatch(slice.removeExperience(index))
}

// Education
export const addEducation = (experience) => (dispatch) => {
    dispatch(slice.addEducation(experience))
}

export const clearEducation = () => (dispatch) => {
    dispatch(slice.clearEducation())
}

export const removeEducation = (index) => (dispatch) => {
    dispatch(slice.removeEducation(index))
}

// Others
export const changeSummary = summary => (dispatch) => {
    dispatch(slice.changeSummary(summary))
}