import React from "react"
import Heading from "./heading"
import Experience from "./experience"
import Education from "./education"
import Others from "./others"
import { useSelector } from "react-redux"

const Forms = () =>{
    const { stage } = useSelector(state=>state.sample)

    return(
        <div>
            {stage === "heading" && <Heading/>}
            {stage === "experience" && <Experience/>}
            {stage === "education" && <Education/>}
            {stage === "others" && <Others/>}
        </div>
    )
}
export default Forms;