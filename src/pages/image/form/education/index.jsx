import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    addEducation, 
    clearEducation, 
    removeEducation 
} from "../../../../store/sample/action"
import { 
    FaPlus, 
    RxCross2, 
    RiDeleteBin6Line 
} from "../../../../icons"

const Education = () =>{
    const { educations } = useSelector(state=>state.sample)
    const [education, setEducation] = useState({
        institutionName: "",
        location: "",
        qualification: "",
        studyField: "",
        graduationYear: ""
    })
    const { heading } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const onExperience = ()=>{
        dispatch(addEducation(education));
    }

    return(
        <div className="mt-3">
            <div className="flex justify-between items-center px-2">
                <h1 className="py-3 text-xl font-semibold">Experiences</h1>
                <div className="flex gap-3">
                    <button onClick={onExperience} className="h-10 w-10 flex justify-center items-center bg-black text-white"><FaPlus size={20}/></button>
                    <button onClick={()=>dispatch(clearEducation())} className="h-10 w-10 flex justify-center items-center bg-black text-white"><RxCross2 size={22}/></button>
                </div>
            </div>
            <form className="grid grid-cols-2 font-medium px-2 gap-5 mb-7">
                <div>
                    <label htmlFor="institutionName">Institution Name</label>
                    <input 
                        id="institutionName"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={education.institutionName}
                        onChange={e=>setEducation({
                            ...education, 
                            institutionName: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input 
                        id="location"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={education.location}
                        onChange={e=>setEducation({
                            ...education, 
                            location: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="qualification">QUALIFICATION</label>
                    <input 
                        id="qualification"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={education.qualification}
                        onChange={e=>setEducation({
                            ...education, 
                            qualification: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="studyField">FIELD OF STUDY</label>
                    <input 
                        id="studyField"
                        type="text"
                        className="border border-black h-10 pl-1 w-full"
                        value={education.studyField} 
                        onChange={e=>setEducation({
                            ...education, 
                            studyField: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="qualification">YEAR OF GRADUATION</label>
                    <input 
                        id="qualification"
                        type="text"
                        className="border border-black h-10 pl-1 w-full"
                        value={education.qualification} 
                        onChange={e=>setEducation({
                            ...education, 
                            qualification: e.target.value
                        })}
                    />
                </div>
                
            </form>
            <hr />
            <div className="px-2 pt-4">
                {
                    educations.map((item, index)=>(
                        <div className="flex justify-between border p-3" key={index}>
                            <div>
                                <h1 className="text-xl font-medium">{item.title}</h1>
                                <h2>{item.employer}, {item.city}</h2>
                            </div>
                            <span onClick={()=>dispatch(removeEducation(index))} className="cursor-pointer">
                                <RiDeleteBin6Line size={20}/>
                            </span>
                        </div>
                    ))
                }
                <div>

                </div>
            </div>
        </div>
        
    )
}
export default Education