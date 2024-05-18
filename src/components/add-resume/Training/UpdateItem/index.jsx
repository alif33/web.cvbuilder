import Modal from "../../../../ui/modal"
import { useDispatch, useSelector } from "react-redux"
import { updateItem } from "../../../../store/sample/action"
import ReactQuill from "../../../../ui/react-quill"

export default function UpdateItem({isOpen, setIsOpen, index}){
    const { trainings } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleChange = e =>{
        dispatch(updateItem("trainings", index, e.target.name, e.target.value))
    } 

    const changeDescription = e=>{
        dispatch(updateItem("trainings", index, "description", e))
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                <div>
                    <label className="label" htmlFor="Name">Name</label>
                    <input 
                        id="Name"
                        type="text"
                        name="name" 
                        className="input"
                        value={trainings[index].name}
                        placeholder="Microsoft  Office"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="instituteName">Institute Name</label>
                    <input 
                        id="instituteName"
                        type="text" 
                        name="institutionName"
                        className="input"
                        value={trainings[index].institutionName}
                        placeholder="Nova Computer Education"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="TrLocation">Location</label>
                    <input 
                        id="TrLocation"
                        type="text" 
                        name="location"
                        className="input"
                        value={trainings[index].location}
                        placeholder="Mymensingh"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="studyField">Timeline</label>
                    <input 
                        id="studyField"
                        type="text"
                        name="timeline"
                        className="input"
                        value={trainings[index].timeline} 
                        placeholder="JAN - 2022"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="qualification">Duration</label>
                    <input 
                        id="qualification"
                        type="text"
                        name="duration"
                        className="input"
                        value={trainings[index].duration} 
                        placeholder="3 Months"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="Coordinator">Coordinator</label>
                    <input 
                        id="Coordinator"
                        type="text"
                        name="coordinator"
                        className="input"
                        value={trainings[index].coordinator} 
                        placeholder="Amitav Reza"
                        onChange={handleChange}
                    />
                </div>  
            </div>
            <div>
                <label className="label" htmlFor="experienceDescription">Description</label>
                <ReactQuill
                    value={trainings[index].description}
                    handleChange={changeDescription}
                />
            </div> 
        </Modal>
    )
}