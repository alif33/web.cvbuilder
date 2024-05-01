import { Link } from "react-router-dom"
import { 
    TfiLayoutListPost, 
    TbCategoryPlus,
    IoPricetagsOutline,
    SiPagekit,
    LuPlusCircle 
} from "../../../icons"

export default function Sidebar(){
    return(
        <div className="w-[15%] min-h-screen border-r border-r-slate-200">
            <ul className="text-sm font-medium pl-3 pt-5">
                <li className="my-2 w-full">
                    <Link className="w-full flex items-center gap-2" to="/dashboard/posts">
                        <TfiLayoutListPost size={15}/>
                        <span>Posts</span>
                    </Link>
                </li>
                <li className="my-2 w-full">
                    <Link className="w-full flex items-center gap-2" to="/dashboard/categories">
                        <TbCategoryPlus size={15}/>
                        <span>Categories</span>
                    </Link>
                </li>
                <li className="my-2 w-full">
                    <Link className="w-full flex items-center gap-2" to="/dashboard/tags">
                        <IoPricetagsOutline size={15}/>
                        <span>Tags</span>
                    </Link>
                </li>
                <li className="my-2 w-full">
                    <Link className="w-full flex items-center gap-2" to="/dashboard/resume-examples">
                        <SiPagekit size={15}/>
                        <span>Examples</span>
                    </Link>
                    <Link className="flex ml-5 items-center gap-2 mt-2" to="/dashboard/add-resume-example">
                        <LuPlusCircle size={15}/> 
                        <span>New</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}