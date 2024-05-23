import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    onListChange,
    setList,
    removeItem 
} from "../../../../store/sample/action"
import { 
    FaPlus,
    IoReload, 
    RiDeleteBin6Line,
    CiEdit 
} from "../../../../icons"
import ReactQuill from "../../../../ui/react-quill"
import UpdateItem from "./UpdateItem"

export default function Extra(){

    const { xperiences } = useSelector(state=>state.sample)
    const [updateItem, setUpdateItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    
    const [xperience, setXperience] = useState({
        title: "",
        employer: "",
        location: "",
        country: "",
        duration: "",
        description: ""
    })
    const dispatch = useDispatch()

    const dragXperience = useRef(0)
    const draggedOverXperience = useRef(0)

    function handleSort() {
        const xps = [...xperiences]
        const temp = xps[dragXperience.current]
        xps[dragXperience.current] = xps[draggedOverXperience.current]
        xps[draggedOverXperience.current] = temp
        dispatch(setList("xperiences", xps))
    }


    const onXperience = ()=>{
        dispatch(onListChange("xperiences", xperience))
        setXperience({
            title: "",
            employer: "",
            location: "",
            country: "",
            duration: "",
            description: ""
        })
    }

    const changeDescription = e=>{
        setXperience({
            ...xperience, 
            description: e
        })
    }

    const handleUpdate = index =>{
        setUpdateItem(index)
        setIsOpen(true)
    }

    return(
        <div>
            <div className="flex justify-between items-center">
                <h1 className="heading py-3">Xperience</h1>
                <div className="flex gap-3">
                    <button onClick={onXperience} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><FaPlus size={20}/></button>
                    <button onClick={()=>dispatch(setList("xperiences", []))} className="h-8 w-8 flex justify-center items-center"><IoReload size={20}/></button>
                </div>
            </div>
            <div className="border-2 border-black py-5 px-2">
                <div>
                    {
                        xperiences.map((item, index)=>(
                            <div 
                                key={index}
                                draggable
                                onDragStart={() => (dragXperience.current = index)}
                                onDragEnter={() => (draggedOverXperience.current = index)}
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
                                    <span onClick={()=>dispatch(removeItem("xperiences", index))} className="cursor-pointer">
                                        <RiDeleteBin6Line size={20}/>
                                    </span>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
                {/* Update Xperience */}
                
                {isOpen && (
                    <UpdateItem 
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        index={updateItem} 
                    />
                )}

                {xperiences.length>0 && (<hr />)}

                <div className="grid grid-cols-2 font-medium gap-x-3 gap-y-1 mb-3">
                    <div>
                        <label className="label" htmlFor="jobTitle">Job Title</label>
                        <input 
                            id="jobTitle"
                            type="text" 
                            className="input"
                            placeholder="Junior fornt end developer"
                            value={xperience.title}
                            onChange={e=>setXperience({
                                ...xperience, 
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
                            value={xperience.employer}
                            onChange={e=>setXperience({
                                ...xperience, 
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
                            value={xperience.location} 
                            onChange={e=>setXperience({
                                ...xperience, 
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
                            value={xperience.country}
                            onChange={e=>setXperience({
                                ...xperience, 
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
                            value={xperience.duration}
                            onChange={e=>setXperience({
                                ...xperience, 
                                duration: e.target.value
                            })}
                        />
                    </div>
                </div>
                {/* Description */}
                <div>
                    <label className="label" htmlFor="xperienceDescription">Description</label>
                    <ReactQuill
                        value={xperience.description}
                        handleChange={changeDescription}
                    />
                </div>                
            </div>
        </div>
    )
}