import { 
    CiImport, 
    LuLayoutPanelLeft,
    IoIosAlbums
} from "../../../icons"
import { useNavigate, useLocation } from "react-router-dom"

export default function Panel(){
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.hash.replace("#", "")

    const handleMove = id =>{
        const location = document.getElementById(id)
    
        if (location) {
            location.scrollIntoView()
            navigate(`/add-resume/#${id}`)
        }
    }

    return(
        <div className="pb-3 pt-5">
            <div className="flex gap-1 pb-1">
                <span onClick={()=>handleMove("templates")} className={`btn-panel ${currentLocation==="templates"? "bg-black text-white": ""}`}><IoIosAlbums/></span>
                <span onClick={()=>handleMove("layout")} className={`btn-panel ${currentLocation==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span>
                <span onClick={()=>handleMove("import")} className={`btn-panel ${currentLocation==="import"? "bg-black text-white": ""}`}><CiImport/></span>
            </div>
            {/* <div className="flex gap-1"> */}
                {/* <span onClick={handleSave} className="btn-panel"><VscSaveAll/></span> */}
                {/* <span onClick={()=>setMode("layout")} className={`btn-panel ${mode==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span> */}
            {/* </div> */}
        </div>
    )
} 