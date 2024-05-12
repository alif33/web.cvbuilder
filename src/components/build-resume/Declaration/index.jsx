import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onTextarea } from "../../../store/resume/action"

export default function Declaration(){
    const resume = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    return(
        <div className="my-7" id="textarea">
            <h1 className="heading text-center">Declaration</h1>
            <div className="mt-3">
                <textarea 
                    rows={8}
                    cols={3}
                    className="textarea border-black"
                    placeholder="ডিক্লিয়ারেশন লিখুন"
                    value={resume.declaration.body}
                    onChange={e=>dispatch(onTextarea("declaration", "body", e.target.value))}
                >
                </textarea>
            </div>
        </div>
    )
}