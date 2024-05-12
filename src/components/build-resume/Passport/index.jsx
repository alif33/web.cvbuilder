import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { onValueChange } from "../../../store/resume/action"

export default function Passport(){
    const { passport } = useSelector(state=>state.resume)
    const dispatch = useDispatch()
    const handleChange = e =>{
        dispatch(onValueChange("passport", e.target.name,  e.target.value))
    }

    return(
        <div id="passport">
            <h1 className="heading text-center pt-3">Passport</h1>
            {/* Passport details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <label className="label" htmlFor="passportNo">Passport No</label>
                    <input 
                        id="passportNo"
                        type="text" 
                        name="number"
                        className="input border-black"
                        value={passport.number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="issueDate">Issue Date</label>
                    <input 
                        id="issueDate"
                        type="text" 
                        name="issueDate"
                        className="input border-black"
                        value={passport.issueDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="expiryDate">Expiry Date</label>
                    <input 
                        id="expiryDate"
                        type="text" 
                        name="expiryDate"
                        className="input border-black"
                        value={passport.expiryDate}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}
