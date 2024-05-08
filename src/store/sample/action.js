import { sampleSlice } from "./slice"
const { actions: slice } = sampleSlice

export const onStage = (stage) => (dispatch) => {
    dispatch(slice.onStage(stage))
}

// Value
export const onValueChange = (field, property, value) => (dispatch) => {
    dispatch(slice.onValueChange({field, property, value}))
}

// List/Array
export const onListChange = (field, item) => (dispatch) => {
    dispatch(slice.onListChange({field, item}))
}

// Set Value
export const setList = (field, list) => (dispatch) => {
    dispatch(slice.setList({field, list}))
}

// Summary
export const changeSummary = summary => (dispatch) => {
    dispatch(slice.changeSummary(summary))
}

// Experience
export const addExperience = (experience) => (dispatch) => {
    dispatch(slice.addExperience(experience))
}

export const orderExperience = (experiences) => (dispatch) => {
    dispatch(slice.orderExperience(experiences))
}

export const clearExperience = () => (dispatch) => {
    dispatch(slice.clearExperience())
}

export const removeExperience = (index) => (dispatch) => {
    dispatch(slice.removeExperience(index))
}

// Education
export const addEducation = (education) => (dispatch) => {
    dispatch(slice.addEducation(education))
}

export const orderEducation = (education) => (dispatch) => {
    dispatch(slice.orderEducation(education))
}

export const clearEducation = () => (dispatch) => {
    dispatch(slice.clearEducation())
}

export const removeEducation = (index) => (dispatch) => {
    dispatch(slice.removeEducation(index))
}

// Reference
export const addReference = (reference) => (dispatch) => {
    dispatch(slice.addReference(reference))
}

export const orderReference = (references) => (dispatch) => {
    dispatch(slice.orderReference(references))
}

export const clearReference = () => (dispatch) => {
    dispatch(slice.clearReference())
}

export const removeReference = (index) => (dispatch) => {
    dispatch(slice.removeReference(index))
}

export const onTextarea = (field, property, value) => (dispatch) => {
    dispatch(slice.onTextarea({ field, property, value }))
}

// Image
export const changeImage = (image) => (dispatch) => {
    dispatch(slice.changeImage(image))
}

// Signature
export const changeSignature = (signature) => (dispatch) => {
    dispatch(slice.changeSignature(signature))
}

// Layout
 
export const changeLayout = (position, value)=>(dispatch) => {
    dispatch(slice.changeLayout({position, value}))
}

export const dropSection = (position, section)=>(dispatch) => {
    dispatch(slice.dropSection({position, section}))
}

export const addSection = (position, section)=>(dispatch) => {
    dispatch(slice.addSection({position, section}))
}

export const updateResume = (resume)=>(dispatch) => {
    dispatch(slice.updateResume(resume))
}