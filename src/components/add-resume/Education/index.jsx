/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    onListChange,
    setList,
    removeEducation 
} from "../../../store/sample/action"
import { 
    FaPlus, 
    RxCross2,
    IoReload, 
    RiDeleteBin6Line 
} from "../../../icons"
import ReactQuill from "../../../ui/react-quill"

export default function Education(){
    const { educations } = useSelector(state=>state.sample)
    const [education, setEducation] = useState({
        institutionName: "",
        location: "",
        qualification: "",
        studyField: "",
        graduationYear: "",
        description: ""
    })
    const dispatch = useDispatch()

    const dragEducation = useRef(0)
    const draggedOverEducation = useRef(0)

    function handleSort() {
        const edus = [...educations]
        const temp = edus[dragEducation.current]
        edus[dragEducation.current] = edus[draggedOverEducation.current]
        edus[draggedOverEducation.current] = temp
        dispatch(setList("educations",edus))
    }

    const onEducation = ()=>{
        dispatch(onListChange("educations",education))
        setEducation({
            institutionName: "",
            location: "",
            qualification: "",
            studyField: "",
            graduationYear: "",
            description: ""
        })
    }

    const changeDescription = e=>{
        setEducation({
            ...education, 
            description: e
        })
    }

    return(
        <div id="education" className="mt-3">
            <div className="flex justify-between items-center">
                <h1 className="heading py-3">Education</h1>
                <div className="flex gap-3">
                    <button role="button" onClick={onEducation} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><FaPlus size={20}/></button>
                    <button onClick={()=>dispatch(setList("educations", []))} className="h-8 w-8 flex justify-center items-center font-bold"><IoReload size={20}/></button>
                </div>
            </div>
            <div className="border-2 border-black py-5 px-2">
                {
                    educations.length>0 &&(
                        <div className="pt-4">
                            {
                                educations.map((item, index)=>(
                                    <div 
                                        key={index}
                                        draggable
                                        onDragStart={() => (dragEducation.current = index)}
                                        onDragEnter={() => (draggedOverEducation.current = index)}
                                        className="flex justify-between border p-3 mb-3 cursor-pointer" 
                                        onDragEnd={handleSort}
                                        onDragOver={(e) => e.preventDefault()}
                                    >
                                        <div>
                                            <h1 className="text-xl font-medium">{item.qualification}</h1>
                                            <h2>{item.institutionName}, {item.location}</h2>
                                        </div>
                                        <span onClick={()=>dispatch(removeEducation(index))} className="cursor-pointer">
                                            <RiDeleteBin6Line size={20}/>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
               
                {educations.length>0 &&  <hr />}

                <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                    <div>
                        <label className="label" htmlFor="qualification">Qualification</label>
                        <input 
                            id="qualification"
                            type="text" 
                            className="input"
                            value={education.qualification}
                            placeholder="Hsc"
                            onChange={e=>setEducation({
                                ...education, 
                                qualification: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="institutionName">Institution Name</label>
                        <input 
                            id="institutionName"
                            type="text" 
                            className="input"
                            value={education.institutionName}
                            placeholder="Cantonment public school and college"
                            onChange={e=>setEducation({
                                ...education, 
                                institutionName: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="location">Location</label>
                        <input 
                            id="location"
                            type="text" 
                            className="input"
                            value={education.location}
                            placeholder="Mymensingh"
                            onChange={e=>setEducation({
                                ...education, 
                                location: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="studyField">Field Of Study</label>
                        <input 
                            id="studyField"
                            type="text"
                            className="input"
                            value={education.studyField} 
                            placeholder="Marketing"
                            onChange={e=>setEducation({
                                ...education, 
                                studyField: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="qualification">Year Of Graduation</label>
                        <input 
                            id="qualification"
                            type="text"
                            className="input"
                            value={education.qualification} 
                            placeholder="2024"
                            onChange={e=>setEducation({
                                ...education, 
                                qualification: e.target.value
                            })}
                        />
                    </div>
                </div>
                {/* Description */}
                <div>
                    <label className="label" htmlFor="experienceDescription">Description</label>
                    <ReactQuill
                        value={education.description}
                        handleChange={changeDescription}
                    />
                </div>               
            </div>
        </div>
    )
}
