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

export default function Experience(){
    const { experiences } = useSelector(state=>state.resume)
    const [updateItem, setUpdateItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    
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
            <div className="flex justify-between items-center">
                <h1 className="heading py-3">Experience</h1>
                <div className="flex gap-3">
                    <button onClick={onExperience} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><FaPlus size={20}/></button>
                    <button onClick={()=>dispatch(setList("experiences", []))} className="h-8 w-8 flex justify-center items-center"><IoReload size={20}/></button>
                </div>
            </div>
            <div className="border-2 border-black py-5 px-2">
                <div>
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
                </div>
                {/* Update Experience */}
                
                {experiences.length>0 && (<hr />)}

                <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                    <div>
                        <label className="label" htmlFor="jobTitle">Job Title</label>
                        <input 
                            id="jobTitle"
                            type="text" 
                            className="input"
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
                            className="input"
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
                            className="input"
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
                            className="input"
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
                            className="input"
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
            </div>
        </div>
        
    )
}
