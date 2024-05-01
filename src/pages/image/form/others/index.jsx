import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSummary } from "../../../../store/sample/action";

const Others = () =>{
    const { summary } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const onSummary = (value)=>{
        dispatch(changeSummary(value))
    }

    const onSkill = (name, value)=>{
        dispatch(changeSummary(value))
    }

    return(
        <form className="mt-9 grid grid-cols-2 font-medium px-2 gap-5" action="">
            <div className="col-span-2">
                <label htmlFor="summary">Summary</label>
                <textarea 
                    id="summary"
                    rows={3}
                    cols={3}
                    className="border border-black pl-1 w-full"
                    value={summary}
                    onChange={e=>onSummary(e.target.value)}
                >
                </textarea>
            </div>
            <div className="col-span-2">
                <label htmlFor="skills">Skills</label>
                <textarea 
                    id="skills"
                    rows={2}
                    className="border border-black pl-1 w-full"
                    // value={heading.surName}
                    onChange={e=>onSkill("surName", e.target.value)}
                ></textarea>
            </div>
        </form>
    )
}
export default Others;