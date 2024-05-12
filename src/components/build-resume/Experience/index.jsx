import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    onListChange,
    setList,
    removeItem 
} from "../../../store/resume/action"
import { 
    FaPlus,
    IoReload, 
    RiDeleteBin6Line,
    CiEdit 
} from "../../../icons"
import ReactQuill from "../../../ui/react-quill"
import { useNavigate } from "react-router-dom"

export default function Experience(){
    const { experiences } = useSelector(state=>state.resume)
    const [have, setHave] = useState(false)
    const [updateItem, setUpdateItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const [experience, setExperience] = useState({
        title: "",
        employer: "",
        location: "",
        country: "",
        duration: "",
        description: ""
    })
    const dispatch = useDispatch()

    const dragExperience = useRef(0)
    const draggedOverExperience = useRef(0)

    function handleSort() {
        const exps = [...experiences]
        const temp = exps[dragExperience.current]
        exps[dragExperience.current] = exps[draggedOverExperience.current]
        exps[draggedOverExperience.current] = temp
        dispatch(setList("experiences",exps))
    }


    const onExperience = ()=>{
        dispatch(onListChange("experiences", experience))
        setExperience({
            title: "",
            employer: "",
            location: "",
            country: "",
            duration: "",
            description: ""
        })
        setHave(false)
        navigate("/build-resume/#experience")
    }

    const changeDescription = e=>{
        setExperience({
            ...experience, 
            description: e
        })
    }

    const handleUpdate = index =>{
        setUpdateItem(index)
        setIsOpen(true)
    }

    return(
        <div id="experience" className="mt-3">
            <h1 className="heading text-center py-3">কর্মক্ষেত্রে অভিজ্ঞতা</h1>
            <hr />
            <h3 className="py-3 text-center">
                {
                    experiences.length>0 ? "পূর্বের অভিজ্ঞতা সমূহ": "পূর্বের কোন অভিজ্ঞতা থাকলে যুক্ত করুন"
                }
            </h3>
            {
                experiences.length === 0 && (
                    <div className="flex justify-center items-center gap-7">
                        <button onClick={()=>setHave(true)} className="w-40 bg-black text-white py-2 rounded-sm">যুক্ত করতে চাই</button>
                        <button className="w-40 bg-gray-400 text-white py-2 rounded-sm">না নেই</button>
                    </div>
                )
            }
            
            {/* Experience list */}

            {
                experiences.map((item, index)=>(
                    <div 
                        key={index}
                        draggable
                        onDragStart={() => (dragExperience.current = index)}
                        onDragEnter={() => (draggedOverExperience.current = index)}
                        className="flex justify-between border cursor-move p-3 mb-3"
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <div>
                            <h1 className="text-base font-medium">{item.title}</h1>
                            <h2 className="text-sm">{item.employer}, {item.city}</h2>
                        </div>
                        <div className="flex gap-2">
                            <span onClick={()=>handleUpdate(index)} className="cursor-pointer">
                                <CiEdit size={20}/>
                            </span>
                            <span onClick={()=>dispatch(removeItem("experiences", index))} className="cursor-pointer">
                                <RiDeleteBin6Line size={20}/>
                            </span>
                        </div>
                        
                    </div>
                ))
            }
                

            {/* <div className="flex gap-3">
                <button onClick={onExperience} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><FaPlus size={20}/></button>
                <button onClick={()=>dispatch(setList("experiences", []))} className="h-8 w-8 flex justify-center items-center"><IoReload size={20}/></button>
            </div> */}

            {experiences.length>0 && (<hr />)}

            {
                    have && (
            <div className="border-2 border-black py-5 px-2 mt-3">
                <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                    <div>
                        <label className="label" htmlFor="jobTitle">Job Title</label>
                        <input 
                            id="jobTitle"
                            type="text" 
                            className="input border-black"
                            placeholder="Junior fornt end developer"
                            value={experience.title}
                            onChange={e=>setExperience({
                                ...experience, 
                                title: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="employer">Employer</label>
                        <input 
                            id="employer"
                            type="text" 
                            className="input border-black"
                            placeholder="Stack Buzz"
                            value={experience.employer}
                            onChange={e=>setExperience({
                                ...experience, 
                                employer: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="JobLocation">Location</label>
                        <input 
                            id="JobLocation"
                            type="text"
                            className="input border-black"
                            placeholder="Amirabad, Maskanda, Mymensingh"
                            value={experience.location} 
                            onChange={e=>setExperience({
                                ...experience, 
                                location: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="country">Country</label>
                        <input 
                            id="country"
                            type="text" 
                            className="input border-black"
                            placeholder="Bangladesh"
                            value={experience.country}
                            onChange={e=>setExperience({
                                ...experience, 
                                country: e.target.value
                            })}
                        />
                    </div>
                    
                    <div>
                        <label className="label" htmlFor="duration">Job Duration</label>
                        <input 
                            id="duration"
                            type="input" 
                            className="input border-black"
                            placeholder="JAN 2020 - MAR 2023"
                            value={experience.duration}
                            onChange={e=>setExperience({
                                ...experience, 
                                duration: e.target.value
                            })}
                        />
                    </div>
                </div>
                {/* Description */}
                <div>
                    <label className="label" htmlFor="experienceDescription">Description</label>
                    <ReactQuill
                        value={experience.description}
                        handleChange={changeDescription}
                    />
                </div> 
                <div>
                    <button onClick={onExperience}>Add</button> 
                </div>               
            </div>
               )
            } 
        </div>
        
    )
}
