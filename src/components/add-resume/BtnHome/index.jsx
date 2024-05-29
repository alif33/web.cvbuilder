import { Link } from "react-router-dom"
import { IoMdHome } from "../../../icons"

export default function Home(){
    return(
        <div className="absolute h-10 w-10 bottom-0 left-2">
            <Link to="/"><IoMdHome size={24}/></Link>
        </div>
    )
}
