import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onValueChange } from "../../../../store/sample/action";

const Heading = ({formData, setData}) =>{
    const { heading } = useSelector(state=>state.sample)
    const dispatch = useDispatch()
    const onChange = (name, value)=>{
        dispatch(onValueChange("heading", name, value))
    }

    return(
        <form className="mt-9 grid grid-cols-2 font-medium px-2 gap-5" action="">
            <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                    id="firstName"
                    type="text" 
                    className="border border-black h-10 pl-1 w-full"
                    value={heading.firstName}
                    onChange={e=>onChange("firstName", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Surname</label>
                <input 
                    type="text" 
                    className="border border-black h-10 pl-1 w-full"
                    value={heading.surName}
                    onChange={e=>onChange("surName", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Country</label>
                <input 
                    type="text" 
                    className="border border-black h-10 pl-1 w-full"
                    value={heading.country}
                    onChange={e=>onChange("country", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">City</label>
                <input 
                    type="text"
                    className="border border-black h-10 pl-1 w-full"
                    value={heading.city} 
                    onChange={e=>onChange("city", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input 
                    type="text" 
                    className="border border-black h-10 pl-1 w-full"
                    value={heading.phone}
                    onChange={e=>onChange("phone", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    className="border border-black h-10 pl-1 w-full"
                    value={heading.email}
                    onChange={e=>onChange("email", e.target.value)}
                />
            </div>
        </form>
    )
}
export default Heading