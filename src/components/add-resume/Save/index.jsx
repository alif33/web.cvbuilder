import { useSelector } from "react-redux"
import { addResume, isEmailExist, updateResume } from "../../../db/queries"
import toast from "react-hot-toast"
import { 
    VscSaveAll
} from "../../../icons"

export default function Save(){
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

        const rgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (heading.email && rgx.test(heading.email)) {
            const existEmail = await isEmailExist(heading.email)
            if(!existEmail){
                await addResume(resume)
                toast.success('Resume added')
            }else{
                await updateResume(existEmail, resume)
                toast.success('Resume updated')
            }
        }else{
            toast.error("Invalid Email")
        }
    }

    return(
        <div className="absolute h-10 w-10 bottom-2 left-2">
            <div className="flex justify-center items-center">
                <span className=" cursor-pointer bg-black text-white py-3 px-3 rounded-full shadow-lg" onClick={handleSave}><VscSaveAll/></span>
            </div>
        </div>
    )
}