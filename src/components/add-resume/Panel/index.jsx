import { 
    MdDynamicForm, 
    CiImport, 
    LuLayoutPanelLeft,
    IoIosAlbums
} from "../../../icons"

export default function Panel({ mode, setMode }){
    return(
        <div className="pb-3">
            <div className="flex gap-1 pb-1">
                <span onClick={()=>setMode("editor")} className={`btn-panel ${mode==="editor"? "bg-black text-white": ""}`}><MdDynamicForm/></span>
                <span onClick={()=>setMode("import")} className={`btn-panel ${mode==="import"? "bg-black text-white": ""}`}><CiImport/></span>
                <span onClick={()=>setMode("layout")} className={`btn-panel ${mode==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span>
            </div>
            <div className="flex gap-1">
                <span onClick={()=>setMode("templates")} className={`btn-panel ${mode==="templates"? "bg-black text-white": ""}`}><IoIosAlbums/></span>
                {/* <span onClick={()=>setMode("import")} className={`btn-panel ${mode==="import"? "bg-black text-white": ""}`}><CiImport/></span>
                <span onClick={()=>setMode("layout")} className={`btn-panel ${mode==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span> */}
            </div>
        </div>
    )
} 