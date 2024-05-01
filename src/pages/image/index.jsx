import React from "react"
import { downloadImage } from "./actions/downloadImage"
import Form from "./form"
import Avalon from "./avalon"
import { useSelector, useDispatch } from "react-redux"
import { GoDownload } from "../../icons"
import { onStage } from "../../store/sample/action"

const Image = () =>{
    const { stage } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleStage = sg=>{
        dispatch(onStage(sg))
    }
    return(
        <div className="pt-3">
            <button className="fixed w-10 h-10 bg-black flex justify-center items-center text-white bottom-3 right-5" onClick={downloadImage}>
                <span><GoDownload size={25}/></span> 
            </button>

            <div className="flex">
                <div className="basis-7/12">
                    <div className="w-[560px] h-[780px] mx-auto border" id="resume">
                        <Avalon/>
                    </div>
                </div>
                <div className="basis-5/12">
                    <ul className="flex gap-3 font-medium mt-7">
                        <li onClick={()=>handleStage("heading")} className={`py-2 px-2 shadow-xl cursor-pointer ${stage==='heading' && 'bg-black text-white'}`}>Heading</li>
                        <li onClick={()=>handleStage("experience")} className={`py-2 px-2 shadow-xl cursor-pointer ${stage==='experience' && 'bg-black text-white'}`}>Experience</li>
                        <li onClick={()=>handleStage("education")} className={`py-2 px-2 shadow-xl cursor-pointer ${stage==='education' && 'bg-black text-white'}`}>Education</li>
                        <li onClick={()=>handleStage("others")} className={`py-2 px-2 shadow-xl cursor-pointer ${stage==='others' && 'bg-black text-white'}`}>Others</li>
                    </ul>
                    <Form/>
                </div>
            </div>
        </div>
    )
}
export default Image;