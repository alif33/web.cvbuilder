import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeSignature } from "../../../store/sample/action"
import UploadWidget from "../../base/UploadWidget"

export default function Signature(){
    const { signature } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleSignature = image =>{
        dispatch(changeSignature(image))
    }

    return(
        <div id="signature">
            <h1 className="heading pt-3">Signature</h1>
            {/* Name */}
            <div className="flex gap-7 pt-5">
                <div>
                    <UploadWidget
                        setImage={handleSignature}
                    />
                </div>
                <div>
                    {signature && signature?.secure_url && <img 
                        src={signature.secure_url} 
                        height={200} 
                        width={200}
                    />}
                </div>
            </div>
        </div>
    )
}
