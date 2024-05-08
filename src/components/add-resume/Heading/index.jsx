import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { onValueChange } from "../../../store/sample/action"

export default function Heading(){
    const { heading } = useSelector(state=>state.sample)
    const dispatch = useDispatch()
    const onChange = e =>{
        dispatch(onValueChange("heading", e.target.name, e.target.value))
    }

    return(
        <div id="heading">
            <h1 className="heading">Heading</h1>
            {/* Name */}
            <div className="flex gap-3">
                <div className="basis-1/2">
                    <label className="label" htmlFor="firstName">First Name</label>
                    <input 
                        id="firstName"
                        type="text"
                        name="firstName" 
                        className="input"
                        value={heading.firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-1/2">
                    <label className="label" htmlFor="">Surname</label>
                    <input 
                        type="text" 
                        className="input"
                        name="surName"
                        value={heading.surName}
                        onChange={onChange}
                    />
                </div>
            </div>

            {/* Address */}
            <div className="">
                <label className="label" htmlFor="">Address</label>
                <input 
                    type="text"
                    className="input"
                    name="address"
                    value={heading.address} 
                    onChange={onChange}
                />
            </div>

            {/* Partials */}
            <div className="flex gap-3">
                <div className="basis-3/12">
                    <label className="label" htmlFor="">City</label>
                    <input 
                        type="text"
                        className="input"
                        name="city"
                        value={heading.city} 
                        onChange={onChange}
                    />
                </div>
                <div className="basis-3/12">
                    <label className="label" htmlFor="">Country</label>
                    <input 
                        type="text" 
                        className="input"
                        name="country"
                        value={heading.country}
                        onChange={onChange}
                    />
                </div>
            </div>
            {/* Contact */}
            <div className="flex gap-3">
                <div className="basis-4/12">
                    <label className="label" htmlFor="">Email</label>
                    <input 
                        type="text" 
                        className="input"
                        name="email"
                        value={heading.email}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-4/12">
                    <label className="label" htmlFor="">Phone</label>
                    <input 
                        type="text" 
                        className="input"
                        name="phone"
                        value={heading.phone}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-4/12">
                    <label className="label" htmlFor="">Linkedin</label>
                    <input 
                        type="text" 
                        className="input"
                        name="linkedin"
                        value={heading.linkedin}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
