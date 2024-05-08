import { useLocation } from "react-router-dom"

export default function SideMenu(){
    const location = useLocation()
    const currentLocation = location.hash.replace("#", "")

    const navItems = ["Heading", "Education", "Experience", "Skills", "Reference", "Training", "Personal", "Textarea", "Image", "Signature", "Passport"]

    return(
        <ul className="flex flex-col font-medium pt-5 gap-3">
            {
                navItems.map((nav, index)=>(
                    <li key={index}><a className={`btn-tab ${currentLocation===nav.toLowerCase() ? "bg-black text-white": ""}`} href={`/add-resume/#${nav.toLowerCase()}`}>{nav}</a></li>
                ))
            }
        </ul>
    )
} 