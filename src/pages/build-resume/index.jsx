import { useState } from "react"
import { useSelector } from "react-redux"
import Heading from "../../components/build-resume/Heading"
import Education from "../../components/build-resume/Education"

export default function BuildResume(){
    const [mode, setMode] = useState("editor")
    const resume = useSelector(state=>state.sample)

    const handleSubmit = ()=>{
        console.log(resume)
    }

    return(
        <div className="max-w-[650px] mx-auto px-2 pt-7">
            <Heading/>
            <Education/>
            <div className="flex justify-center">
                <button onClick={handleSubmit} className="h-10 w-40 rounded-lg bg-black text-white">Submit</button>
            </div>
        </div>   
    )
}