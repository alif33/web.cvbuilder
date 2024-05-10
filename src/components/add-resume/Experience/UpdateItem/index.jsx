import Modal from "../../../../ui/modal"
import { useDispatch, useSelector } from "react-redux"
import { updateItem } from "../../../../store/sample/action"
import ReactQuill from "../../../../ui/react-quill"

export default function UpdateItem({isOpen, setIsOpen, index}){
    const { experiences } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleChange = e =>{
        dispatch(updateItem("experiences", index, e.target.name, e.target.value))
    } 

    const changeDescription = e=>{
        dispatch(updateItem("experiences", index, "description", e))
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                    <div>
                        <label className="label" htmlFor="jobTitle">Job Title</label>
                        <input 
                            id="jobTitle"
                            type="text" 
                            name="title"
                            className="input"
                            value={experiences[index].title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="employer">Employer</label>
                        <input 
                            id="employer"
                            type="text" 
                            name="employer"
                            className="input"
                            value={experiences[index].employer}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="Country">Location</label>
                        <input 
                            id="Location"
                            type="text"
                            name="location"
                            className="input"
                            value={experiences[index].location} 
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="Country">Country</label>
                        <input 
                            id="Country"
                            type="text" 
                            name="country"
                            className="input"
                            value={experiences[index].country}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="JobDuration">Job Duration</label>
                        <input 
                            id="JobDuration"
                            type="text" 
                            name="duration"
                            className="input"
                            value={experiences[index].duration}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="experienceDescription">Description</label>
                    <ReactQuill
                       value={experiences[index].description}
                        handleChange={changeDescription}
                    />
                </div> 
        </Modal>
    )
}