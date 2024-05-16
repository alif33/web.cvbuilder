import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onTextarea } from "../../../store/sample/action"
import { customSections } from "../../../const"

export default function Custom(){
    const [property, setProperty] = useState("triangle")
    const resume = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    console.log(resume);

    return(
        <div id="custom">
            <div className="border-2 border-black my-3 p-3" id="textarea">
            <h1 className="heading">Custom</h1>
            <div>
                <div className="flex gap-1 my-3">
                    {customSections.map((custom, index)=>(
                        <span 
                            key={index}
                            className={`text-sm py-1 px-2 rounded-full cursor-pointer capitalize ${custom===property?"bg-black text-white": "bg-white text-black border border-black"}`}
                            onClick={()=>setProperty(custom)} 
                        >
                            {custom}
                        </span>
                    ))}
                </div>
                <div>
                    <div className="mb-5">
                        <label className="label" htmlFor="customFieldHeading">Headline</label>
                        <input  
                            id=""
                            type="text" 
                            className="input"
                            value={resume[property].heading}
                            onChange={e=>dispatch(onTextarea(property, "heading", e.target.value))}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="DescriptionArea">Description</label>
                        <textarea
                            id="DescriptionArea" 
                            rows={8}
                            cols={3}
                            className="textarea"
                            value={resume[property].body}
                            onChange={e=>dispatch(onTextarea(property, "body", e.target.value))}
                        >
                        </textarea>
                    </div>
                </div>
                
            </div>
            {/* <Rich/> */}
        </div>
        </div>
    )
}

