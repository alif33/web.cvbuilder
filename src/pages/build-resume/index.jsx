import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Heading from "../../components/build-resume/Heading"
import Education from "../../components/build-resume/Education"
import Experience from "../../components/build-resume/Experience"
import Summary from "../../components/build-resume/Summary"
import Objective from "../../components/build-resume/Objective"
import Declaration from "../../components/build-resume/Declaration"
import Personal from "../../components/build-resume/Personal"
import Passport from "../../components/build-resume/Passport"
import { isEmailExist, addResume, updateResume } from "../../db/queries"

export default function BuildResume(){
    const {
        heading, 
        educations, 
        experiences, 
        summary, 
        objective, 
        declaration, 
        expertise, 
        skills, 
        references, 
        personal, 
        passport 
    } = useSelector(state=>state.resume)

    const handleSubmit = async()=>{
        const resume = {
            email: heading.email, 
            heading, 
            educations, 
            experiences, 
            summary, 
            objective, 
            declaration, 
            expertise, 
            skills, 
            references, 
            personal, 
            passport 
        }
        const existEmail = await isEmailExist(heading.email)
        if(!existEmail){
            addResume(resume)
        }else{
            updateResume(existEmail, resume)
        }
    }

    return(
        <div className="max-w-[750px] mx-auto px-2 pt-7">
            <Heading/>
            <Education/>
            <Experience/>
            <Summary/>
            <Objective/>
            <Declaration/>
            <Personal/>
            <Passport/>
            <div className="flex justify-center mb-20 mt-12">
                <button onClick={handleSubmit} className="h-10 w-40 rounded-lg bg-black text-white">Submit</button>
            </div>
        </div>   
    )
}