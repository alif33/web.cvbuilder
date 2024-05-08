import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaPlus, RiDeleteBin6Line } from "../../../icons"
import { 
    addReference,
    removeReference,
    orderReference
} from "../../../store/sample/action"

export default function Skills(){
    const { references } = useSelector(state=>state.sample)
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
                <div className="pb-7">
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
                                <span onClick={()=>dispatch(removeReference(index))} className="cursor-pointer">
                                    <RiDeleteBin6Line size={20}/>
                                </span>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <div className="flex gap-3 mt-7">
                    {/* Name */}
                    <div className="basis-1/2">
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
                    <div className="basis-1/2">
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
                </div>
                {/* Institute */}
                <div className="flex gap-3">
                    <div className="basis-6/12">
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
                </div>
                
                {/* Contacts */}
                <div className="flex gap-3 pb-3">
                    <div className="basis-6/12">
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
                    <div className="basis-6/12">
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
