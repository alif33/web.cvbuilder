import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    addExperience, 
    clearExperience, 
    removeExperience 
} from "../../../../store/sample/action"
import { 
    FaPlus, 
    RxCross2, 
    RiDeleteBin6Line 
} from "../../../../icons"

const Experience = () =>{
    const { experiences } = useSelector(state=>state.sample)
    const [experience, setExperience] = useState({
        title: "",
        employer: "",
        city: "",
        country: "",
        startingDate: "",
        endDate: ""
    })
    const { heading } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const onExperience = ()=>{
        dispatch(addExperience(experience));
    }

    return(
        <div className="mt-3">
            <div className="flex justify-between items-center px-2">
                <h1 className="py-3 text-xl font-semibold">Experiences</h1>
                <div className="flex gap-3">
                    <button onClick={onExperience} className="h-10 w-10 flex justify-center items-center bg-black text-white"><FaPlus size={20}/></button>
                    <button onClick={()=>dispatch(clearExperience())} className="h-10 w-10 flex justify-center items-center bg-black text-white"><RxCross2 size={22}/></button>
                </div>
            </div>
            <form className="grid grid-cols-2 font-medium px-2 gap-5 mb-7">
                <div>
                    <label htmlFor="jobTitle">JOB TITLE</label>
                    <input 
                        id="jobTitle"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={heading.title}
                        onChange={e=>setExperience({
                            ...experience, 
                            title: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="employer">EMPLOYER</label>
                    <input 
                        id="employer"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={experience.employer}
                        onChange={e=>setExperience({
                            ...experience, 
                            employer: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input 
                        id="country"
                        type="text" 
                        className="border border-black h-10 pl-1 w-full"
                        value={experience.country}
                        onChange={e=>setExperience({
                            ...experience, 
                            country: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input 
                        id="city"
                        type="text"
                        className="border border-black h-10 pl-1 w-full"
                        value={experience.city} 
                        onChange={e=>setExperience({
                            ...experience, 
                            city: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="startingDate">Starting date</label>
                    <input 
                        id="startingDate"
                        type="date" 
                        className="border border-black h-10 pl-1 w-full"
                        value={experience.startingDate}
                        onChange={e=>setExperience({
                            ...experience, 
                            startingDate: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="endDate">End date</label>
                    <input 
                        id="endDate"
                        type="date" 
                        className="border border-black h-10 pl-1 w-full"
                        value={experience.endDate}
                        onChange={e=>setExperience({
                            ...experience, 
                            endDate: e.target.value
                        })}
                    />
                </div>
            </form>
            <hr />
            <div className="px-2 pt-4">
                {
                    experiences.map((item, index)=>(
                        <div className="flex justify-between border p-3" key={index}>
                            <div>
                                <h1 className="text-xl font-medium">{item.title}</h1>
                                <h2>{item.employer}, {item.city}</h2>
                            </div>
                            <span onClick={()=>dispatch(removeExperience(index))} className="cursor-pointer">
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
export default Experience;