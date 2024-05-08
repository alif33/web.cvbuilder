import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ReactQuill from "../../../../ui/react-quill"
import { onTextarea } from "../../../../store/sample/action"

export default function Rich(){
    const [property, setProperty] = useState("expertise")
    const resume = useSelector(state=>state.sample)
    const riches = ["Expertise"]
    const dispatch = useDispatch()


    const handleChange = e=>{
        dispatch(onTextarea(property, "body", e))
    }

    
    return(
        <div>
            <h1 className="heading">Rich</h1>
            <div>
                <div className="flex gap-1 my-3">
                    {riches.map((rich, index)=>(
                        <span 
                            key={index}
                            className={`text-sm py-1 px-2 rounded-full cursor-pointer ${rich.toLowerCase()===property?"bg-black text-white": "bg-white text-black border border-black"}`}
                            onClick={()=>setProperty(rich.toLowerCase())} 
                        >
                            {rich}
                        </span>
                    ))}
                </div>
                <ReactQuill
                    value={resume[property].body}
                    handleChange={handleChange}
                />
            </div>
        </div>
    )
}