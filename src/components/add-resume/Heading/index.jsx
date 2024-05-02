import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeHeading } from "../../../store/sample/action"

export default function Heading(){
    const { heading } = useSelector(state=>state.sample)
    const dispatch = useDispatch()
    const onChange = (name, value)=>{
        dispatch(changeHeading(name, value))
    }

    return(
        <div id="heading">
            <h1 className="text-2xl font-medium py-3">Heading</h1>
            {/* Name */}
            <div className="flex gap-3">
                <div className="basis-1/2">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        id="firstName"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full rounded-sm"
                        value={heading.firstName}
                        onChange={e=>onChange("firstName", e.target.value)}
                    />
                </div>
                <div className="basis-1/2">
                    <label htmlFor="">Surname</label>
                    <input 
                        type="text" 
                        className="border border-black h-10 pl-1 w-full rounded-sm"
                        value={heading.surName}
                        onChange={e=>onChange("surName", e.target.value)}
                    />
                </div>
            </div>
            {/* Address */}
            <div className="flex gap-3">
                <div className="basis-3/12">
                    <label htmlFor="">City</label>
                    <input 
                        type="text"
                        className="border border-black h-10 pl-1 w-full"
                        value={heading.city} 
                        onChange={e=>onChange("city", e.target.value)}
                    />
                </div>
                <div className="basis-3/12">
                    <label htmlFor="">Country</label>
                    <input 
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={heading.country}
                        onChange={e=>onChange("country", e.target.value)}
                    />
                </div>
            </div>
            {/* Contact */}
            <div className="flex gap-3">
                <div className="basis-4/12">
                    <label htmlFor="">Email</label>
                    <input 
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={heading.email}
                        onChange={e=>onChange("email", e.target.value)}
                    />
                </div>
                <div className="basis-4/12">
                    <label htmlFor="">Phone</label>
                    <input 
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={heading.phone}
                        onChange={e=>onChange("phone", e.target.value)}
                    />
                </div>
                <div className="basis-4/12">
                    <label htmlFor="">Linkedin</label>
                    <input 
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={heading.phone}
                        onChange={e=>onChange("linkedin", e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}



// const Heading = ({formData, setData}) =>{
//     const { heading } = useSelector(state=>state.sample)
//     const dispatch = useDispatch()
//     const onChange = (name, value)=>{
//         dispatch(changeHeading(name, value))
//     }

//     return(
//         <form className="mt-9 grid grid-cols-2 font-medium px-2 gap-5" action="">
            
//         </form>
//     )
// }
// export default Heading