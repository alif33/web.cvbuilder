import { useState } from "react"
import Heading from "../../components/build-resume/Heading"
import Education from "../../components/build-resume/Education"

export default function BuildResume(){
    const [mode, setMode] = useState("editor")
    // const resume = useSelector(state=>state.sample)

    return(
        <div className=" max-w-[650px] mx-auto">
            <Heading/>
            <Education/>
        </div>   
    )
}