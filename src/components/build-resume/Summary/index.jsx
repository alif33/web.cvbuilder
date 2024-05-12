import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onTextarea } from "../../../store/resume/action"

export default function Summary(){
    const resume = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    return(
        <div className="my-7" id="summary">
            <h1 className="heading text-center mb-3">Summary(optional)</h1>
            <hr />
            <div className="mt-5">
                <textarea 
                    rows={8}
                    cols={3}
                    className="textarea border-black"
                    placeholder="সামারি লিখুন"
                    value={resume.summary.body}
                    onChange={e=>dispatch(onTextarea("summary", "body", e.target.value))}
                >
                </textarea>
            </div>
        </div>
    )
}