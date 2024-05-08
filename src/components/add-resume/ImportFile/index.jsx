import { useState } from "react"
import { useDispatch } from "react-redux"
import { jsonrepair } from "jsonrepair"
import { updateResume } from "../../../store/sample/action"

export default function ImportFile(){
    const [data, setData] = useState()
    const dispatch = useDispatch()

    const handleExtract = e =>{
        const repaired = jsonrepair(e.target.value)
        const extracted = JSON.parse(repaired)
        setData(extracted)
        dispatch(updateResume(extracted))
    }

    const resume = data?.resume || false

    return(
        <div>
            <h1 className="heading">Import data</h1>
            <div className="mt-2">   
                <textarea 
                    rows={5}
                    className="w-full border p-2"
                    onChange={handleExtract}
                >
                </textarea>
            </div>
            {resume && <div className="border-2 p-3">
                {resume?.heading && 
                    <div>
                        <h2>{resume?.heading?.firstName} {resume?.heading?.surName}</h2>
                        <h2>{resume?.heading?.email}</h2>
                        <h2>{resume?.heading?.phone}</h2>
                    </div>
                }
                {
                    resume?.summary && <div>
                        <hr />
                        <h3 className="text-lg font-semibold">Summary</h3>
                        <p>{resume?.summary}</p>
                    </div>
                }
                {
                    resume?.summary && <div>
                        <hr />
                        <h3 className="text-lg font-semibold">Education</h3>
                        <p>{resume?.summary}</p>
                    </div>
                }
                {
                    resume?.summary && <div>
                        <hr />
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <p>{resume?.summary}</p>
                    </div>
                }

            </div>}
        </div>
    )
}