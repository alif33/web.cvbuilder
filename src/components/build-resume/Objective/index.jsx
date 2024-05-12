import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onTextarea } from "../../../store/resume/action"

export default function Objective(){
    const resume = useSelector(state=>state.resume)
    const dispatch = useDispatch()

    return(
        <div className="my-7" id="textarea">
            <h1 className="heading text-center">Career Objective</h1>
            <div className="mt-3">
                <textarea 
                    rows={8}
                    cols={3}
                    className="textarea border-black"
                    placeholder="আপনার ক্যারিয়ার অব্জেক্টিভ লিখুন"
                    value={resume.objective.body}
                    onChange={e=>dispatch(onTextarea("objective", "body", e.target.value))}
                >
                </textarea>
            </div>
        </div>
    )
}