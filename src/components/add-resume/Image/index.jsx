/* eslint-disable react-hooks/rules-of-hooks */
import UploadWidget from "../../base/UploadWidget"
import { useDispatch, useSelector } from "react-redux"
import { onValueChange } from "../../../store/sample/action"
import { toInteger } from "lodash"

export default function image(){
    const { image } = useSelector(state=>state.sample)
    const dispatch = useDispatch()

    const handleImage = image =>{
        if (image?.secure_url) {
            dispatch(onValueChange("image", "secure_url", image.secure_url))
        }
    }

    const changeDimentions = e=>{
        dispatch(onValueChange("image", e.target.name, toInteger(e.target.value)))
    }

    return(
        <div id="image" className="border-2 p-3 border-black">
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
            <div className="mt-7">
                <h1 className="font-semibold pb-1">Dementions</h1>
                <div className="flex gap-5">
                    <div>
                        <label htmlFor="imageWidth" className="label">Width</label>
                        <input 
                            id="imageWidth"
                            type="number" 
                            name="width"
                            className="input" 
                            value={image.width}
                            onChange={changeDimentions}
                        />
                    </div>
                    <div>
                        <label htmlFor="imageHeight" className="label">Height</label>
                        <input 
                            id="imageHeight"
                            type="number" 
                            name="height"
                            className="input" 
                            value={image.height}
                            onChange={changeDimentions}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}