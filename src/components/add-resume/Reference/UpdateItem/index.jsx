import Modal from "../../../../ui/modal"
import { useDispatch, useSelector } from "react-redux"
import { updateItem } from "../../../../store/sample/action"

export default function UpdateItem({isOpen, setIsOpen, index}){
    const { references } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleChange = e =>{
        dispatch(updateItem("references", index, e.target.name, e.target.value))
    } 

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="grid grid-cols-2 font-medium gap-5 mb-3">
                {/* Name */}
                <div>
                    <label className="label" htmlFor="Name">Name</label>
                    <input 
                        id="Name"
                        type="text" 
                        name="name"
                        className="input"
                        value={references[index].name}
                        onChange={handleChange}
                    />
                </div>
                {/* Designation */}
                <div>
                    <label className="label" htmlFor="Designation">Designation</label>
                    <input 
                        id="Designation"
                        type="text" 
                        name="designation"
                        className="input"
                        value={references[index].designation}
                        onChange={handleChange}
                    />
                </div>
                {/* Institute */}
                <div>
                    <label className="label" htmlFor="Institute">Institute</label>
                    <input 
                        id="Institute"
                        type="text"
                        name="institute"
                        className="input"
                        value={references[index].institute} 
                        onChange={handleChange}
                    />
                </div>
                {/* Contacts */}
                <div>
                    <label className="label" htmlFor="Email">Email</label>
                    <input 
                        id="Email"
                        type="text" 
                        name="email"
                        className="input"
                        value={references[index].email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="Phone">Phone</label>
                    <input 
                        id="Phone"
                        type="text" 
                        name="phone"
                        className="input"
                        value={references[index].phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </Modal>
    )
}