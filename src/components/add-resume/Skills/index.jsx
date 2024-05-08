import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { onListChange, setList } from "../../../store/sample/action"

export default function Skills(){
    const [skill, setSkill] = useState({name: "", percentage: ""}) 
    const { skills } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const nameRef = useRef(null)
    const percentageRef = useRef(null)

    const dragSkill = useRef(0)
    const draggedOverSkill = useRef(0)

    function handleSort() {
        const sks = [...skills]
        const temp = sks[dragSkill.current]
        sks[dragSkill.current] = sks[draggedOverSkill.current]
        sks[draggedOverSkill.current] = temp
        dispatch(setList("skills", sks))
    }

    const handleAdd = ()=>{
        dispatch(onListChange("skills", skill))
        setSkill({name: "", percentage: ""})
        nameRef.current.focus()
    }

    return(
        <div id="skills">
            <h1 className="heading pt-3">Skills</h1>
            <div className="border-2 border-black px-2 py-5">
                <ul className="mb-3">
                    {skills.map((skill, index)=>(
                        <li 
                            key={index}
                            draggable
                            onDragStart={() => (dragSkill.current = index)}
                            onDragEnter={() => (draggedOverSkill.current = index)}
                            className="flex justify-between text-sm font-medium cursor-pointer w-52 border border-black px-2 py-1 mb-1 rounded-sm"
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <h2>{skill.name}</h2>
                            <h3>{skill.percentage}</h3>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-5">
                    <div className="basis-8/12">
                        <input 
                            ref={nameRef}
                            type="text" 
                            className="input"
                            placeholder="Skill Name"
                            value={skill.name}
                            onChange={e=>setSkill({
                                ...skill,
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
                            placeholder="Percentage"
                            value={skill.percentage}
                            onChange={e=>setSkill({
                                ...skill,
                                percentage: e.target.value
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
