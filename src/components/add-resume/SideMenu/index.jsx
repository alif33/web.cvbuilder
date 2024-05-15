import { useLocation, useNavigate } from "react-router-dom"

export default function SideMenu(){
    const location = useLocation()
    const currentLocation = location.hash.replace("#", "")
    const navigate = useNavigate()

    const navItems = ["Heading", "Education", "Experience", "Skills", "Language", "Reference", "Training", "Personal", "Textarea", "Image", "Signature", "Passport"]

    const handleMove = id=>{
        const location = document.getElementById(id)
    
        if (location) {
            location.scrollIntoView()
            navigate(`/add-resume/#${id}`)
        }
    }

    return(
        <ul className="flex flex-col font-medium pt-2 gap-3">
            {
                navItems.map((nav, index)=>(
                    <li key={index}><span onClick={()=>handleMove(nav.toLowerCase())} className={`btn-tab cursor-pointer ${currentLocation===nav.toLowerCase() ? "bg-black text-white": ""}`}>{nav}</span></li>
                ))
            }
        </ul>
    )
} 