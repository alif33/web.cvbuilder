/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    updateItem,
    insertItem
} from "../../../store/resume/action"
import Swal from "sweetalert2"
import { educationsSchema } from "../../../const"

export default function Education(){
    const [certificates, setCertificates] = useState([])
    const { educations } = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    const onEducation = (index, e)=>{
        dispatch(updateItem("educations", index, e.target.name, e.target.value))
    }

    const certifications = [
        {name: "jsc", label: "JSC/JDC"},
        {name: "ssc", label: "JSC/Dhakil"},
        {name: "hsc", label: "JSC/Alim"},
        {name: "hons", label: "Hon's/Bsc/Mbbs/Fazil"},
    ]

    const toggleCertificate = (name, label, index) =>{
        if(!certificates.includes(name)){
            setCertificates([...certificates, name])
            dispatch(insertItem("educations", index, educationsSchema[index]))
        }else{
            Swal.fire({
                icon: "question",
                title: `আপনি কি ${label} বাদ দিতে চান?`,
                showDenyButton: true,
                confirmButtonText: "হ্যাঁ",
                denyButtonText: 'না',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'bg-red-500 text-white border-0 py-2 px-5 rounded-md mr-2',
                    denyButton: 'bg-gray-400 text-white border-0 py-2 px-5 rounded-md ml-2'
                }
              }).then((result) => {
                if (result.isConfirmed) {
                    const filteredCertificates = certificates.filter(cert => cert !== name)
                    setCertificates(filteredCertificates)
                } 
              })
        }
    }

    return(
        <div id="education" className="mt-3 overflow-x-hidden">
            <h1 className="heading py-3 text-center">শিক্ষাগত যোগ্যতা</h1>
            <hr />
            <div className="my-3">
                <h2 className="text-center text-lg py-5">আপনি যেই শিক্ষাগত যোগ্যতাগুলো এড করতে চান সেগুলো সিলেক্ট করুন</h2>
                <div className="flex flex-wrap">
                    {certifications.map((certificate, index)=>(
                        <span 
                            key={index}
                            onClick={()=>toggleCertificate(certificate.name, certificate.label, index)} 
                            className={` ${certificates.includes(certificate.name)? "bg-black text-white": "border-black"} border py-2 px-3 rounded-full mr-3 cursor-pointer mb-3`} 
                        >
                            {certificate.label}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Add Education */}
            {educations.map((education, index)=>{
                return(
                    <div className="relative border-2 border-black p-3 mb-9" key={index}>
                        <div className="absolute -top-4 -left-1/2 -right-1/2 ">
                            <h1 className="text-lg text-center font-semibold pb-1">
                                <span className="bg-white">{education.courseName}</span>
                            </h1>
                        </div>
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