import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onTextarea } from "../../../store/sample/action"
import Rich from "./Rich"

export default function Textarea(){
    const [property, setProperty] = useState("summary")
    const resume = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const simples = ["Summary", "Objective", "Declaration"]

    return(
        <div className="border-2 border-black my-3 p-3" id="textarea">
            <h1 className="heading">Simple</h1>
            <div>
                <div className="flex gap-1 my-3">
                    {simples.map((simple, index)=>(
                        <span 
                            key={index}
                            className={`text-sm py-1 px-2 rounded-full cursor-pointer ${simple.toLowerCase()===property?"bg-black text-white": "bg-white text-black border border-black"}`}
                            onClick={()=>setProperty(simple.toLowerCase())} 
                        >
                            {simple}
                        </span>
                    ))}
                </div>
                <div>
                    <textarea 
                        rows={8}
                        cols={3}
                        className="textarea"
                        value={resume[property].body}
                        onChange={e=>dispatch(onTextarea(property, "body", e.target.value))}
                    >
                    </textarea>
                </div>
            </div>
            <Rich/>
        </div>
    )
}