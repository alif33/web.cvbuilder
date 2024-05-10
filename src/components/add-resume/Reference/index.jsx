import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaPlus, RiDeleteBin6Line, CiEdit } from "../../../icons"
import { 
    addReference,
    removeReference,
    orderReference
} from "../../../store/sample/action"
import UpdateItem from "./UpdateItem"

export default function Skills(){
    const { references } = useSelector(state=>state.sample)
    const [updateItem, setUpdateItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const [reference, setReference] = useState({
        name: "",
        designation: "",
        institute: "",
        phone: "",
        email: ""
    })

    const dispatch = useDispatch()
    const dragReference = useRef(0)
    const draggedOverReference = useRef(0)

    function handleSort() {
        const refes = [...references]
        const temp = refes[dragReference.current]
        refes[dragReference.current] = refes[draggedOverReference.current]
        refes[draggedOverReference.current] = temp
        dispatch(orderReference(refes))
    }

    const onReference = ()=>{
        dispatch(addReference(reference))
    }

    const handleUpdate = index =>{
        setUpdateItem(index)
        setIsOpen(true)
    }

    return(
        <div id="reference">
            <div className="flex justify-between items-center">
                <h1 className="heading py-3">Reference</h1>
                <div className="flex gap-3">
                    <button role="button" onClick={onReference} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><FaPlus size={20}/></button>
                    {/* <button onClick={()=>dispatch(clearEducation())} className="h-8 w-8 flex justify-center items-center bg-black text-white rounded-sm shadow-lg"><RxCross2 size={22}/></button> */}
                </div>
            </div>
            <div className="border-2 border-black py-5 px-2">
                <div className="pb-3">
                    {
                        references.map((reference, index)=>(
                            <div 
                                key={index}
                                draggable
                                onDragStart={() => (dragReference.current = index)}
                                onDragEnter={() => (draggedOverReference.current = index)}
                                className="flex justify-between border p-3 mb-3 cursor-pointer" 
                                onDragEnd={handleSort}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <div>
                                    <h1 className="text-base font-light">{reference.name}</h1>
                                    <h2 className="text-sm">{reference.designation} at {reference.institute}</h2>
                                </div>
                                <div className="flex gap-2">
                                    <span onClick={()=>handleUpdate(index)} className="cursor-pointer">
                                        <CiEdit size={20}/>
                                    </span>
                                    <span onClick={()=>dispatch(removeReference(index))} className="cursor-pointer">
                                        <RiDeleteBin6Line size={20}/>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Update Experience */}
                
                {isOpen && (
                    <UpdateItem 
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        index={updateItem} 
                    />
                )}
                {references.length>0 && (<hr />)}
                <div className="grid grid-cols-2 gap-3 mt-3">
                    {/* Name */}
                    <div>
                        <label className="label" htmlFor="Name">Name</label>
                        <input 
                            id="Name"
                            type="text" 
                            className="input"
                            value={reference.name}
                            onChange={e=>setReference({
                                ...reference, 
                                name: e.target.value
                            })}
                        />
                    </div>
                    {/* Designation */}
                    <div>
                        <label className="label" htmlFor="">Designation</label>
                        <input 
                            type="text" 
                            className="input"
                            value={reference.designation}
                            onChange={e=>setReference({
                                ...reference, 
                                designation: e.target.value
                            })}
                        />
                    </div>
                    {/* Institute */}
                    <div>
                        <label className="label" htmlFor="">Institute</label>
                        <input 
                            type="text"
                            className="input"
                            value={reference.institute} 
                            onChange={e=>setReference({
                                ...reference, 
                                institute: e.target.value
                            })}
                        />
                    </div>
                     {/* Contacts */}
                    <div>
                        <label className="label" htmlFor="">Email</label>
                        <input 
                            type="text" 
                            className="input"
                            value={reference.email}
                            onChange={e=>setReference({
                                ...reference, 
                                email: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="">Phone</label>
                        <input 
                            type="text" 
                            className="input"
                            value={reference.phone}
                            onChange={e=>setReference({
                                ...reference, 
                                phone: e.target.value
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
