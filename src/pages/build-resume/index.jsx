import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Heading from "../../components/build-resume/Heading"
import Education from "../../components/build-resume/Education"
import { getAllResumes, addResume, isEmailExist, updateResume } from "../../db/queries"

export default function BuildResume(){
    const {
        heading, 
        educations, 
        experiences, 
        summary, 
        objectives, 
        declaration, 
        expertise, 
        skills, 
        references, 
        personal, 
        passport 
    } = useSelector(state=>state.resume)

    useEffect(()=>{
        getAllResumes()
            .then(resumes=>{
                console.log(resumes)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    const handleSubmit = async()=>{
        const resume = {
            email: heading.email, 
            heading, 
            educations, 
            experiences, 
            summary, 
            objectives, 
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



    // summary: {heading: "Summary", body: ""},
    //     objectives: {heading: "Objectives", body: ""},
    //     declaration: {heading: "Declaration", body: ""},
    //     expertise: {heading: "Expertise", body: ""},
    //     educations: educationsSchema,
    //     experiences: [],
    //     skills: [],
    //     references: [],
    //     personal: {fatherName: "", motherName: "", permanentAddress: "", nationality: "", nid: "", religion: "", dob: "", sex: "", maritalStatus: "", bloodGroup: ""},
    //     passport: {
    //         number: "",
    //         issueDate: "",
    //         expiryDate: ""
    //     },




    return(
        <div className="max-w-[750px] mx-auto px-2 pt-7">
            <Heading/>
            <Education/>
            <div className="flex justify-center mb-20">
                <button onClick={handleSubmit} className="h-10 w-40 rounded-lg bg-black text-white">Submit</button>
            </div>
        </div>   
    )
}