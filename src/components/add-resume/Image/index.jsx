/* eslint-disable react-hooks/rules-of-hooks */
import UploadWidget from "../../base/UploadWidget"
import { useDispatch, useSelector } from "react-redux"
import { changeImage } from "../../../store/sample/action"

export default function image(){
    const { image } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleImage = image =>{
        dispatch(changeImage(image))
    }
    return(
        <div id="image">
            <h1 className="heading">Image</h1>
            <div className="flex gap-7 pt-5">
                <div>
                    <UploadWidget
                        setImage={handleImage}
                    />
                </div>
                <div>
                    {image && image?.secure_url && <img 
                        src={image.secure_url} 
                        height={200} 
                        width={200}
                    />}
                </div>
            </div>
        </div>
    )
}