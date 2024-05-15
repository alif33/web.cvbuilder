/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    onListChange,
    setList,
    removeItem 
} from "../../../store/sample/action"
import { 
    FaPlus, 
    RxCross2,
    IoReload, 
    RiDeleteBin6Line,
    CiEdit 
} from "../../../icons"
import ReactQuill from "../../../ui/react-quill"
// import UpdateItem from "./UpdateItem"

export default function Training(){
    const { trainings } = useSelector(state=>state.sample)
    const [updateItem, setUpdateItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const [training, setTraining] = useState({
        name: "",
        institutionName: "",
        location: "",
        timeline: "",
        duration: "",
        coordinator: "",
        description: ""
    })
    const dispatch = useDispatch()

    const dragEducation = useRef(0)
    const draggedOverEducation = useRef(0)

    function handleSort() {
        const trns = [...trainings]
        const temp = trns[dragEducation.current]
        trns[dragEducation.current] = trns[draggedOverEducation.current]
        trns[draggedOverEducation.current] = temp
        dispatch(setList("trainings", trns))
    }

    const onTraining = ()=>{
        dispatch(onListChange("trainings", training))
        setTraining({
            name: "",
            institutionName: "",
            location: "",
            timeline: "",
            duration: "",
            coordinator: "",
            description: ""
        })
    }

    const changeDescription = e=>{
        setTraining({
            ...training, 
            description: e
        })
    }

    const handleUpdate = index =>{
        setUpdateItem(index)
        setIsOpen(true)
    }

    console.log(trainings)

    return(
        <div id="training" className="mt-3">
            <div className="flex justify-between items-center">
                <h1 className="heading py-3">Training</h1>
                <div className="flex gap-3">
                    <button role="button" onClick={onTraining} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><FaPlus size={20}/></button>
                    <button onClick={()=>dispatch(setList("trainings", []))} className="h-8 w-8 flex justify-center items-center font-bold"><IoReload size={20}/></button>
                </div>
            </div>
            <div className="border-2 border-black py-5 px-2">
                <div> 
                    {
                        trainings.map((item, index)=>(
                            <div 
                                key={index}
                                draggable
                                onDragStart={() => (dragEducation.current = index)}
                                onDragEnter={() => (draggedOverEducation.current = index)}
                                className="flex justify-between items-center border p-3 mb-3 cursor-move" 
                                onDragEnd={handleSort}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <div>
                                    <h1 className="text-base font-medium">{item.name}{item?.timeline?.length > 0 && ", "+item.timeline}</h1>
                                    <h2 className="text-sm font-medium">{item.institutionName}{item?.location?.length>0 && ", "+item.location}</h2>
                                    <h3 className="text-sm">{item.duration}</h3>
                                </div>
                                <div className="flex gap-2">
                                    <span onClick={()=>handleUpdate(index)} className="cursor-pointer">
                                        <CiEdit size={20}/>
                                    </span>
                                    <span onClick={()=>dispatch(removeItem("trainings", index))} className="cursor-pointer">
                                        <RiDeleteBin6Line size={20}/>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Update Education */}
                {/* {isOpen && (
                    <UpdateItem 
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        index={updateItem} 
                    />
                )} */}
                {trainings.length>0 &&  <hr className="pb-3" />}
                {/* Add Education */}
                <div className="grid grid-cols-2 font-medium gap-x-3 gap-y-1 mb-3">
                    <div>
                        <label className="label" htmlFor="Name">Name</label>
                        <input 
                            id="Name"
                            type="text" 
                            className="input"
                            value={training.name}
                            placeholder="Microsoft  Office"
                            onChange={e=>setTraining({
                                ...training, 
                                name: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="instituteName">Institute Name</label>
                        <input 
                            id="instituteName"
                            type="text" 
                            className="input"
                            value={training.institutionName}
                            placeholder="Nova Computer Education"
                            onChange={e=>setTraining({
                                ...training, 
                                institutionName: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="TrLocation">Location</label>
                        <input 
                            id="TrLocation"
                            type="text" 
                            className="input"
                            value={training.location}
                            placeholder="Mymensingh"
                            onChange={e=>setTraining({
                                ...training, 
                                location: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="studyField">Timeline</label>
                        <input 
                            id="studyField"
                            type="text"
                            className="input"
                            value={training.timeline} 
                            placeholder="JAN - 2022"
                            onChange={e=>setTraining({
                                ...training, 
                                timeline: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="qualification">Duration</label>
                        <input 
                            id="qualification"
                            type="text"
                            className="input"
                            value={training.duration} 
                            placeholder="3 Months"
                            onChange={e=>setTraining({
                                ...training, 
                                duration: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="Coordinator">Coordinator</label>
                        <input 
                            id="Coordinator"
                            type="text"
                            className="input"
                            value={training.coordinator} 
                            placeholder="Amitav Reza"
                            onChange={e=>setTraining({
                                ...training, 
                                coordinator: e.target.value
                            })}
                        />
                    </div>
                </div>
                {/* Description */}
                <div>
                    <label className="label" htmlFor="experienceDescription">Description</label>
                    <ReactQuill
                        value={training.description}
                        handleChange={changeDescription}
                    />
                </div>               
            </div>
        </div>
    )
}
