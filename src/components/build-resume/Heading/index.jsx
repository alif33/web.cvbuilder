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
                <div className="basis-full md:basis-1/2">
                    <label className="label" htmlFor="firstName">First Name</label>
                    <input 
                        id="firstName"
                        type="text"
                        name="firstName" 
                        className="input"
                        placeholder="নামের প্রথম অংশ"
                        value={heading.firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-full md:basis-1/2">
                    <label className="label" htmlFor="">Surname</label>
                    <input 
                        type="text" 
                        name="surName"
                        className="input"
                        placeholder="নামের দ্বিতীয় অংশ"
                        value={heading.surName}
                        onChange={onChange}
                    />
                </div>
            </div>

            {/* Address */}
            <div>
                <label className="label" htmlFor="">Address</label>
                <input 
                    type="text"
                    name="address"
                    className="input"
                    placeholder="ঠিকানা"
                    value={heading.address} 
                    onChange={onChange}
                />
            </div>
            {/* Contact */}
            <div className="flex gap-3">
                <div className="basis-full md:basis-4/12">
                    <label className="label" htmlFor="">Email</label>
                    <input 
                        type="text" 
                        name="email"
                        className="input"
                        placeholder="ইমেইল"
                        value={heading.email}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-full md:basis-4/12">
                    <label className="label" htmlFor="">Phone</label>
                    <input 
                        type="text" 
                        name="phone"
                        className="input"
                        placeholder="ফোন নাম্বার"
                        value={heading.phone}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-full md:basis-4/12">
                    <label className="label" htmlFor="">Linkedin</label>
                    <input 
                        type="text" 
                        name="linkedin"
                        className="input"
                        placeholder="লিংডিন অ্যাড্রেস"
                        value={heading.linkedin}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
