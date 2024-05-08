import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { onValueChange } from "../../../store/sample/action"

export default function Personal(){
    const { personal } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const onChange = e =>{
        dispatch(onValueChange("personal", e.target.name, e.target.value))
    }

    console.log(personal);
    return(
        <div id="personal" className="mt-3 mb-7">
            <h1 className="heading">Personal</h1>
            {/* Name */}
            <div className="flex gap-3">
                <div className="basis-1/2">
                    <label className="label" htmlFor="fatherName">Father’s Name</label>
                    <input 
                        id="fatherName"
                        type="text" 
                        name="fatherName"
                        className="input"
                        value={personal.fatherName}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-1/2">
                    <label className="label" htmlFor="motherName">Mother’s Name</label>
                    <input 
                        id="motherName"
                        type="text" 
                        name="motherName"
                        className="input"
                        value={personal.motherName}
                        onChange={onChange}
                    />
                </div>
            </div>

            {/* Address */}
            <div className="">
                <label className="label" htmlFor="permanentAddress">Permanent Address</label>
                <input 
                    id="permanentAddress"
                    type="text"
                    name="permanentAddress"
                    className="input"
                    value={personal.permanentAddress}
                    onChange={onChange}
                />
            </div>

            {/* Secrect */}
            <div className="flex gap-3">
                <div className="basis-4/12">
                    <label className="label" htmlFor="Nationality">Nationality</label>
                    <input 
                        id="Nationality"
                        type="text"
                        name="nationality"
                        className="input"
                        value={personal.nationality}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-4/12">
                    <label className="label" htmlFor="NID">National ID No</label>
                    <input 
                        id="NID"
                        type="text" 
                        name="nid"
                        className="input"
                        value={personal.nid}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-4/12">
                    <label className="label" htmlFor="Religion">Religion</label>
                    <input 
                        id="Religion"
                        type="text" 
                        name="religion"
                        className="input"
                        value={personal.religion}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="basis-3/12">
                    <label className="label" htmlFor="DOB">Date of Birth</label>
                    <input 
                        id="DOB"
                        type="text" 
                        name="dob"
                        className="input"
                        value={personal.dob}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-3/12">
                    <label className="label" htmlFor="Sex">Sex</label>
                    <input 
                        id="Sex"
                        type="text" 
                        name="sex"
                        className="input"
                        value={personal.sex}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-3/12">
                    <label className="label" htmlFor="maritalStatus">Marital Status</label>
                    <input 
                        id="maritalStatus"
                        type="text" 
                        name="maritalStatus"
                        className="input"
                        value={personal.maritalStatus}
                        onChange={onChange}
                    />
                </div>
                <div className="basis-3/12">
                    <label className="label" htmlFor="bloodGroup">Blood Group</label>
                    <input 
                        id="bloodGroup"
                        type="text" 
                        name="bloodGroup"
                        className="input"
                        value={personal.bloodGroup}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
