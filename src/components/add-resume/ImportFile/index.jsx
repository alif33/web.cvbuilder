import { useState } from "react"
import { useDispatch } from "react-redux"
import { jsonrepair } from "jsonrepair"
import { updateResume, fetchResume } from "../../../store/sample/action"
import { IoReload } from "../../../icons"
import { findByEmail } from "../../../db/queries"
import { GoSearch } from "react-icons/go";
import Spinner from "./Spinner"

// import { fetchResume } from "../../../store/sampl"

export default function ImportFile(){
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const handleExtract = e =>{
        setText(e.target.value)
        const repaired = jsonrepair(e.target.value)
        const extracted = JSON.parse(repaired)
        setData(extracted)
        dispatch(updateResume(extracted))
    }

    const resume = data?.resume || false

    const handleFind = async()=>{
        setLoading(true)
        const resume = await findByEmail(email)
        if (resume) {
            dispatch(fetchResume(resume))
        }
        setLoading(false)
    }

    return(
        <div className="relative">
            <div className="absolute top-3 right-3">
                <span onClick={()=>{
                    setText("")
                    setEmail("")
                }} className="cursor-pointer"><IoReload size={20}/></span>
            </div>
            {
                !text && !text?.length > 0 && (
                    <>
                        <div className="pb-3">
                            <h1 className="text-base font-semibold">Find resume</h1>
                            <div className="flex max-w-80">
                                <input 
                                    type="email" 
                                    className="border border-black h-11 pl-2 w-full rounded-tl-sm rounded-bl-sm focus:outline-none focus:border-2 focus:rounded-tl-sm focus:rounded-bl-sm "
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                />
                                <span onClick={handleFind} className="flex items-center justify-center bg-black text-white py-[5px] px-2 rounded-tr-sm rounded-br-sm cursor-pointer">
                                    <h3 className="font-medium">
                                        {loading? <Spinner/>: <GoSearch size={24}/>}                                        
                                    </h3>
                                </span>
                            </div>
                        </div>
                        <hr />
                    </>
                    
                )
            }

            {
                !email && !email?.length > 0 && (
                    <div className="pt-3">
                        <h1 className="text-base font-semibold">Import data</h1>
                        <div className="mt-1">   
                            <textarea 
                                rows={5}
                                className="w-full border p-2"
                                placeholder="Please drop your json"
                                value={text}
                                onChange={handleExtract}
                            >
                            </textarea>
                        </div>
                    </div>
                )
            }

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