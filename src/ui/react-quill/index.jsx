import ReactQuill from "react-quill"
import conf from "../../config/react-quill"
import "react-quill/dist/quill.snow.css"

export default function Quill({ value,  handleChange }) {
    return (
        <div className="mt-3">
            <ReactQuill 
                {...conf} 
                value={value} 
                onChange={e=>handleChange(e)} 
            />
        </div>
    )
}