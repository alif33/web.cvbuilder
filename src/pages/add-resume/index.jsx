import { useState } from "react"
import { PDFViewer } from "@react-pdf/renderer"
import Template from "../../templates"
import { useSelector } from "react-redux"
import Sections from "../../components/add-resume/Sections"
import SideMenu from "../../components/add-resume/SideMenu"
import Panel from "../../components/add-resume/Panel"
import Home from "../../components/add-resume/BtnHome"
import Save from "../../components/add-resume/Save"

const containerStyle = { width: '100%', height: '100vh' }

export default function AddResume(){
    const [mode, setMode] = useState("editor")
    const resume = useSelector(state=>state.sample)

    return(
        <div className="flex max-h-screen ml-2 overflow-y-hidden">
            <div className="basis-1/12 min-h-screen">
                <div className="relative flex flex-col min-h-screen">
                    <Panel mode={mode} setMode={setMode}/>
                    <SideMenu/>
                    <Home/>
                    <Save/>
                </div>
            </div>
            <div className="min-h-screen basis-6/12 overflow-y-scroll px-2 pb-20">
                <Sections/>
            </div>
            <div className="basis-5/12">
                <PDFViewer style={containerStyle}>
                    <Template data={resume}/>
                </PDFViewer>
            </div>
        </div>
    )
}