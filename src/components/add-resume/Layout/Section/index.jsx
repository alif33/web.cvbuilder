/* eslint-disable react/prop-types */
import { useRef } from "react"
import { IoClose } from "../../../../icons"
import { useDispatch } from "react-redux"
import { changeLayout, dropSection } from "../../../../store/sample/action"

export default function Section({ sections, position }){

    const dragPerson = useRef(0)
    const draggedOverPerson = useRef(0)
    const dispatch = useDispatch()

    function handleSort() {
        const parts = [...sections]
        const temp = parts[dragPerson.current]
        parts[dragPerson.current] = parts[draggedOverPerson.current]
        parts[draggedOverPerson.current] = temp
        dispatch(changeLayout(position, parts))
    }

    const handleDrop = (section)=>{
        dispatch(dropSection(position, section))
    }

    return(
        <ul className="flex flex-col gap-2"> 
            {sections.map((section, index) => (
                <li className="flex items-center" 
                    key={index}
                    draggable
                    onDragStart={() => (dragPerson.current = index)}
                    onDragEnter={() => (draggedOverPerson.current = index)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <span className="bg-black text-white py-1 px-2 rounded-full">{section}</span>
                    <span className=" cursor-pointer" onClick={()=>handleDrop(section)}><IoClose size={20}/></span>
                </li>
            ))}
        </ul>
    )
} 