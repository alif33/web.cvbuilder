/* eslint-disable react/prop-types */
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Section from "../Section"
import { FaList, IoClose } from "../../../../icons"
import { addSection } from "../../../../store/sample/action"
import { sections } from "../../../../const"
import _ from "lodash"

export default function Page({ title, left, right }){
    const [position, setPosition] = useState("") 
    const [mode, setMode] = useState("") 
    const [isShow, setIsShow] = useState(false) 
    const { layout } = useSelector(state=>state.sample)
    const dispatch = useDispatch() 

    const handleAppearance = (pos, mode)=>{
        setPosition(pos)
        setMode(mode)
        setIsShow(true)
    }

    const handleAdd = section =>{
        dispatch(addSection(mode, section))
    }

    return(
        <div className="relative h-[350px] w-[280px] border p-2">
            <div className="flex items-center absolute top-1 right-1">
                <span className={`mt-1 cursor-pointer ${isShow && position==="right" ? "opacity-100": "opacity-20"}`} onClick={()=>handleAppearance("right", right)}>
                    <FaList/>
                </span>   
            </div>
            <div className="flex items-center absolute top-1 left-1">
                <span className={`mt-1 cursor-pointer ${isShow && position==="left" ? "opacity-100": "opacity-20"}`}  onClick={()=>handleAppearance("left", left)}>
                    <FaList/>
                </span>   
            </div>
            <h2 className="text-center font-medium">{title}</h2>
            <hr />
            { isShow && (
                <div>
                    <div className="flex justify-center mt-2 cursor-pointer">
                        <span onClick={()=>setIsShow(false)} className="bg-gray-100 p-2 rounded-full"><IoClose size={20}/></span>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                        {
                            sections.map((section, index)=>{
                                const isExist = _.includes(_.flatten(_.values(layout)), section)
                                if (!isExist) {
                                    return(
                                        <li key={index}>
                                            <span onClick={()=>handleAdd(section)} className="py-1 bg-black text-white px-2 rounded-full cursor-pointer capitalize">{section}</span> 
                                        </li>
                                    )
                                }
                               
                            })
                        }
                    </ul>
                </div>
                    
                )
            }
           
            {
                !isShow && (
                    <div className="flex pt-3">
                        <div className="basis-6/12">
                            <Section 
                                sections={layout[left]}  
                                position={left}
                            />
                        </div>
                        <div className="basis-6/12">
                            <Section 
                                sections={layout[right]}  
                                position={right}
                            />
                        </div>
                    </div>
                )
            }
           
        </div>
    )
}