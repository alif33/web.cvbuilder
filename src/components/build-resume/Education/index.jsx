/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    updateItem
} from "../../../store/resume/action"

export default function Education(){
    const { educations } = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    const onEducation = (index, e)=>{
        dispatch(updateItem("educations", index, e.target.name, e.target.value))
    }

    const certificates = [
        {name: "jsc", label: "JSC/JDC"},
        {name: "ssc", label: "JSC/Dhakil"},
        {name: "hsc", label: "JSC/Alim"},
        {name: "hons", label: "'Hon's'/Bsc/Mbbs/Fazil"},
    ]

    return(
        <div id="education" className="mt-3">
            <h1 className="heading py-3 text-center">শিক্ষাগত যোগ্যতা</h1>
            <hr />
            <div className="my-9">
                <h2 className="text-center text-lg pb-5">আপনি যেই শিক্ষাগত যোগ্যতাগুলো এড করতে চান সেগুলো সিলেক্ট করুন</h2>
                <div className="flex flex-wrap">
                    {certificates.map((certificate, index)=>(
                        <span className="border border-black py-2 px-3 rounded-full mr-3 cursor-pointer" key={index}>{certificate.label}</span>
                    ))}
                </div>
            </div>
            
            {/* Add Education */}
            {educations.map((education, index)=>{
                return(
                    <div className="border-2 border-black p-3 mb-3" key={index}>
                        <h1 className="text-lg font-semibold pb-1">{education.courseName}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 font-medium gap-5 mb-3">
                            <div>
                                <label className="label" htmlFor="qualification">কোর্সের নাম</label>
                                <input 
                                    id="qualification"
                                    type="text" 
                                    name="qualification"
                                    className="input border-black"
                                    value={education.qualification}
                                    placeholder="Hsc"
                                    onChange={e=>onEducation(index, e)}
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="institutionName">প্রতিষ্ঠানের নাম</label>
                                <input 
                                    id="institutionName"
                                    type="text" 
                                    name="institutionName"
                                    className="input border-black"
                                    value={education.institutionName}
                                    placeholder="Cantonment public school and college"
                                    onChange={e=>onEducation(index, e)}
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="location">Location</label>
                                <input 
                                    id="location"
                                    type="text" 
                                    name="location"
                                    className="input border-black"
                                    value={education.location}
                                    placeholder="Mymensingh"
                                    onChange={e=>onEducation(index, e)}
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="studyField">গ্রুপ/বিভাগ</label>
                                <input 
                                    id="studyField"
                                    type="text"
                                    name="studyField"
                                    className="input border-black"
                                    value={education.studyField} 
                                    placeholder="Science, Marketing"
                                    onChange={e=>onEducation(index, e)}
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="qualification">পাসের সন</label>
                                <input 
                                    id="qualification"
                                    type="text"
                                    name="graduationYear"
                                    className="input border-black"
                                    value={education.graduationYear} 
                                    placeholder="2024"
                                    onChange={e=>onEducation(index, e)}
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="qualification">GPA/CGPA</label>
                                <input 
                                    id="qualification"
                                    type="text"
                                    name="result"
                                    className="input border-black"
                                    value={education.result} 
                                    placeholder="5.00 ( out of 5)"
                                    onChange={e=>onEducation(index, e)}
                                />
                            </div>
                        </div>  
                    </div> 
                )
            })}
                                
        </div>
    )
}