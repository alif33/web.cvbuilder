import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    onListChange,
    setList,
    removeExperience 
} from "../../../store/sample/action"
import { 
    FaPlus,
    IoReload, 
    RxCross2, 
    RiDeleteBin6Line 
} from "../../../icons"
import ReactQuill from "../../../ui/react-quill"

export default function Experience(){
    const { heading, experiences } = useSelector(state=>state.sample)
    const [experience, setExperience] = useState({
        title: "",
        employer: "",
        city: "",
        country: "",
        startingDate: "",
        endDate: "",
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
    }

    const changeDescription = e=>{
        setExperience({
            ...experience, 
            description: e
        })
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
                {
                    experience.length>0 && (
                        <div className="pt-4">
                            {
                                experiences.map((item, index)=>(
                                    <div 
                                        key={index}
                                        draggable
                                        onDragStart={() => (dragExperience.current = index)}
                                        onDragEnter={() => (draggedOverExperience.current = index)}
                                        className="flex justify-between border cursor-pointer p-3 mb-3"
                                        onDragEnd={handleSort}
                                        onDragOver={(e) => e.preventDefault()}
                                    >
                                        <div>
                                            <h1 className="text-base font-medium">{item.title}</h1>
                                            <h2 className="text-sm">{item.employer}, {item.city}</h2>
                                        </div>
                                        <span onClick={()=>dispatch(removeExperience(index))} className="cursor-pointer">
                                            <RiDeleteBin6Line size={20}/>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
               
                {experiences.length>0 && (<hr />)}
                <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                    <div>
                        <label className="label" htmlFor="jobTitle">Job Title</label>
                        <input 
                            id="jobTitle"
                            type="text" 
                            className="input"
                            value={heading.title}
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
                            value={experience.employer}
                            onChange={e=>setExperience({
                                ...experience, 
                                employer: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="country">Country</label>
                        <input 
                            id="country"
                            type="text" 
                            className="input"
                            value={experience.country}
                            onChange={e=>setExperience({
                                ...experience, 
                                country: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="city">City</label>
                        <input 
                            id="city"
                            type="text"
                            className="input"
                            value={experience.city} 
                            onChange={e=>setExperience({
                                ...experience, 
                                city: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="startingDate">Starting date</label>
                        <input 
                            id="startingDate"
                            type="date" 
                            className="input"
                            value={experience.startingDate}
                            onChange={e=>setExperience({
                                ...experience, 
                                startingDate: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="endDate">End date</label>
                        <input 
                            id="endDate"
                            type="date" 
                            className="input"
                            value={experience.endDate}
                            onChange={e=>setExperience({
                                ...experience, 
                                endDate: e.target.value
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
