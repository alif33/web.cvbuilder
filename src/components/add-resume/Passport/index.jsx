import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { onValueChange } from "../../../store/sample/action"

export default function Passport(){
    const { passport } = useSelector(state=>state.sample)
    const dispatch = useDispatch()
    const handleChange = e =>{
        dispatch(onValueChange("passport", e.target.name,  e.target.value))
    }

    return(
        <div id="passport">
            <h1 className="heading pt-3">Passport</h1>
            {/* Passport details */}
            <div className="flex gap-3">
                <div className="basis-1/2">
                    <label className="label" htmlFor="passportNo">Passport No</label>
                    <input 
                        id="passportNo"
                        type="text" 
                        name="number"
                        className="input"
                        value={passport.number}
                        onChange={handleChange}
                    />
                </div>
                <div className="basis-1/2">
                    <label className="label" htmlFor="issueDate">Issue Date</label>
                    <input 
                        id="issueDate"
                        type="text" 
                        name="issueDate"
                        className="input"
                        value={passport.issueDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="basis-1/2">
                    <label className="label" htmlFor="expiryDate">Expiry Date</label>
                    <input 
                        id="expiryDate"
                        type="text" 
                        name="expiryDate"
                        className="input"
                        value={passport.expiryDate}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}
