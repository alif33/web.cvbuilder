import { useSelector } from "react-redux"
import { 
    MdDynamicForm, 
    CiImport, 
    LuLayoutPanelLeft,
    IoIosAlbums,
    VscSaveAll
} from "../../../icons"
import { addResume, isEmailExist, updateResume } from "../../../db/queries"
import toast from "react-hot-toast"

export default function Panel({ mode, setMode }){
    const {
        heading, 
        educations, 
        experiences, 
        summary, 
        objective, 
        declaration, 
        expertise, 
        skills, 
        references, 
        personal, 
        image, 
        signature,
        passport,
        layout,
        templateName 
    } = useSelector(state=>state.sample)

    const handleSave = async()=>{
        const resume = {
            email: heading.email, 
            heading, 
            educations, 
            experiences, 
            summary, 
            objective, 
            declaration, 
            expertise, 
            skills, 
            references, 
            personal,
            image, 
            signature,
            passport,
            layout,
            templateName 
        }
        const existEmail = await isEmailExist(heading.email)
        if(!existEmail){
            await addResume(resume)
            toast.success('Resume added')
        }else{
            await updateResume(existEmail, resume)
            toast.success('Resume updated')
        }
    }

    return(
        <div className="pb-3 pt-5">
            <div className="flex gap-1 pb-1">
                <span onClick={()=>setMode("editor")} className={`btn-panel ${mode==="editor"? "bg-black text-white": ""}`}>
                    <MdDynamicForm/>
                </span>
                <span onClick={()=>setMode("import")} className={`btn-panel ${mode==="import"? "bg-black text-white": ""}`}><CiImport/></span>
                <span onClick={()=>setMode("layout")} className={`btn-panel ${mode==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span>
            </div>
            <div className="flex gap-1">
                <span onClick={()=>setMode("templates")} className={`btn-panel ${mode==="templates"? "bg-black text-white": ""}`}><IoIosAlbums/></span>
                <span onClick={handleSave} className="btn-panel"><VscSaveAll/></span>
                {/* <span onClick={()=>setMode("layout")} className={`btn-panel ${mode==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span> */}
            </div>
        </div>
    )
} 