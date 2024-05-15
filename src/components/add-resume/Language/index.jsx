import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { onListChange, setList, removeItem } from "../../../store/sample/action"
import { IoReload, IoClose } from "../../../icons"

export default function Languages(){
    const [language, setLanguage] = useState({name: "", level: ""}) 
    const { languages } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const nameRef = useRef(null)
    const percentageRef = useRef(null)

    const dragSkill = useRef(0)
    const draggedOverSkill = useRef(0)

    function handleSort() {
        const lns = [...languages]
        const temp = lns[dragSkill.current]
        lns[dragSkill.current] = lns[draggedOverSkill.current]
        lns[draggedOverSkill.current] = temp
        dispatch(setList("languages", lns))
    }

    const handleAdd = ()=>{
        dispatch(onListChange("languages", language))
        setLanguage({name: "", level: ""})
        nameRef.current.focus()
    }

    console.log("LN:", languages);

    return(
        <div id="language">
            <div className="flex justify-between items-center">
                <h1 className="heading pt-3">Language</h1>
                <div className="flex gap-3">
                    <button onClick={()=>dispatch(setList("languages", []))} className="h-8 w-8 flex justify-center items-center"><IoReload size={20}/></button>
                </div>
            </div>
            <div className="border-2 border-black px-2 py-5">
                <ul className="mb-3">
                    {languages.map((skill, index)=>(
                        <li 
                            key={index}
                            draggable
                            onDragStart={() => (dragSkill.current = index)}
                            onDragEnter={() => (draggedOverSkill.current = index)}
                            className="flex items-center text-sm font-medium mb-1 gap-1"
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <span className="flex justify-between w-52 border border-black px-2 py-1 cursor-move rounded-sm">
                                <h2>{skill.name}</h2>
                                <h3>{skill.level}</h3>
                            </span>
                            <span onClick={()=>dispatch(removeItem("languages", index))} className="cursor-pointer"><IoClose/></span>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-5">
                    <div className="basis-8/12">
                        <input 
                            ref={nameRef}
                            type="text" 
                            className="input"
                            placeholder="Language Name"
                            value={language.name}
                            onChange={e=>setLanguage({
                                ...language,
                                name: e.target.value
                            })}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    percentageRef.current.focus()
                                }
                            }}
                        />
                    </div>
                    <div className="basis-3/12">
                        <input 
                            ref={percentageRef}
                            type="text" 
                            className="input"
                            placeholder="Level"
                            value={language.level}
                            onChange={e=>setLanguage({
                                ...language,
                                level: e.target.value
                            })}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    handleAdd();
                                }
                            }}
                        />
                    </div>
                    <div className="basis-1/12">
                        <button onClick={handleAdd} className="bg-black text-sm text-white py-[7px] px-3 rounded shadow-lg">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
