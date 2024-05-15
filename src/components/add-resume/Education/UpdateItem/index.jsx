import Modal from "../../../../ui/modal"
import { useDispatch, useSelector } from "react-redux"
import { updateItem } from "../../../../store/sample/action"

export default function UpdateItem({isOpen, setIsOpen, index}){
    const { educations } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleChange = e =>{
        dispatch(updateItem("educations", index, e.target.name, e.target.value))
    } 

    console.log(educations, "EDU");

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>
            <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                    <div>
                        <label className="label" htmlFor="qualification">Qualification</label>
                        <input 
                            id="qualification"
                            type="text" 
                            name="qualification"
                            className="input"
                            value={educations[index].qualification}
                            placeholder="Hsc"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="institutionName">Institution Name</label>
                        <input 
                            id="institutionName"
                            type="text" 
                            name="institutionName"
                            className="input"
                            value={educations[index].institutionName}
                            placeholder="Cantonment public school and college"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="location">Location</label>
                        <input 
                            id="location"
                            type="text" 
                            name="location"
                            className="input"
                            value={educations[index].location}
                            placeholder="Mymensingh"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="studyField">Field Of Study</label>
                        <input 
                            id="studyField"
                            type="text"
                            name="studyField"
                            className="input"
                            value={educations[index].studyField} 
                            placeholder="Science, Marketing"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="qualification">Year Of Graduation</label>
                        <input 
                            id="qualification"
                            type="text"
                            name="graduationYear"
                            className="input"
                            value={educations[index].graduationYear} 
                            placeholder="2024"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="qualification">GPA/CGPA</label>
                        <input 
                            id="qualification"
                            type="text"
                            name="result"
                            className="input"
                            value={educations[index].result} 
                            placeholder="5.00 ( out of 5)"
                            onChange={handleChange}
                        />
                    </div>
                </div>

            </div>
        </Modal>
    )
}