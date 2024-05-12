import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { onValueChange } from "../../../store/resume/action"

export default function Personal(){
    const { personal } = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    const onChange = e =>{
        dispatch(onValueChange("personal", e.target.name, e.target.value))
    }

    return(
        <div id="personal" className="mt-3 mb-7">
            <h1 className="heading text-center mb-3">Personal Information(optional)</h1>
            <hr />
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div>
                    <label className="label" htmlFor="fatherName">Father’s Name</label>
                    <input 
                        id="fatherName"
                        type="text" 
                        name="fatherName"
                        className="input border-black"
                        value={personal.fatherName}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="motherName">Mother’s Name</label>
                    <input 
                        id="motherName"
                        type="text" 
                        name="motherName"
                        className="input border-black"
                        value={personal.motherName}
                        onChange={onChange}
                    />
                </div>
                {/* Address */}
                <div>
                    <label className="label" htmlFor="permanentAddress">Permanent Address</label>
                    <input 
                        id="permanentAddress"
                        type="text"
                        name="permanentAddress"
                        className="input border-black"
                        value={personal.permanentAddress}
                        onChange={onChange}
                    />
                </div>

                {/* Secrect */}
                <div>
                    <label className="label" htmlFor="Nationality">Nationality</label>
                    <input 
                        id="Nationality"
                        type="text"
                        name="nationality"
                        className="input border-black"
                        value={personal.nationality}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="NID">National ID No</label>
                    <input 
                        id="NID"
                        type="text" 
                        name="nid"
                        className="input border-black"
                        value={personal.nid}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="Religion">Religion</label>
                    <input 
                        id="Religion"
                        type="text" 
                        name="religion"
                        className="input border-black"
                        value={personal.religion}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="DOB">Date of Birth</label>
                    <input 
                        id="DOB"
                        type="text" 
                        name="dob"
                        className="input border-black"
                        value={personal.dob}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="Sex">Sex</label>
                    <input 
                        id="Sex"
                        type="text" 
                        name="sex"
                        className="input border-black"
                        value={personal.sex}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="maritalStatus">Marital Status</label>
                    <input 
                        id="maritalStatus"
                        type="text" 
                        name="maritalStatus"
                        className="input border-black"
                        value={personal.maritalStatus}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="bloodGroup">Blood Group</label>
                    <input 
                        id="bloodGroup"
                        type="text" 
                        name="bloodGroup"
                        className="input border-black"
                        value={personal.bloodGroup}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
