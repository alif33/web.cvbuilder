import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onTextarea } from "../../../store/resume/action"

export default function Summary(){
    const resume = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    return(
        <div className="my-7" id="textarea">
            <h1 className="heading text-center">Summary</h1>
            <div className="mt-3">
                <textarea 
                    rows={8}
                    cols={3}
                    className="textarea border-black"
                    placeholder="আপনার সামারি লিখুন"
                    value={resume.summary.body}
                    onChange={e=>dispatch(onTextarea("summary", "body", e.target.value))}
                >
                </textarea>
            </div>
        </div>
    )
}