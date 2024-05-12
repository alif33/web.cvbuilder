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
                        placeholder="Ismail h."
                        value={heading.firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-1/2">
                    <label className="label" htmlFor="surName">Surname</label>
                    <input 
                        id="surName"
                        type="text" 
                        className="input"
                        name="surName"
                        placeholder="Alif"
                        value={heading.surName}
                        onChange={onChange}
                    />
                </div>
            </div>

            {/* Address */}
            <div className="">
                <label className="label" htmlFor="Address">Address</label>
                <input 
                    id="Address"
                    type="text"
                    className="input"
                    name="address"
                    placeholder="Ponghagra churkhai mymensingh"
                    value={heading.address} 
                    onChange={onChange}
                />
            </div>

            {/* Contact */}
            <div className="flex gap-3">
                <div className="basis-4/12">
                    <label className="label" htmlFor="Email">Email</label>
                    <input 
                        id="Email"
                        type="text" 
                        className="input"
                        name="email"
                        placeholder="alif@gmail.com"
                        value={heading.email}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-4/12">
                    <label className="label" htmlFor="phoneNumber">Phone</label>
                    <input 
                        id="phoneNumber"
                        type="text" 
                        className="input"
                        name="phone"
                        placeholder="+8801625794888"
                        value={heading.phone}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-4/12">
                    <label className="label" htmlFor="linkedIn">Linkedin</label>
                    <input 
                        id="linkedIn"
                        type="text" 
                        className="input"
                        name="linkedin"
                        placeholder="linkedin.co/alif"
                        value={heading.linkedin}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
