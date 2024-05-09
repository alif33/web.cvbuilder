import { useDispatch, useSelector } from "react-redux"
import templates from "../../../static/templates.json"
import { onChange } from "../../../store/sample/action"

export default function Templates(){
    const resume = useSelector(state=>state.sample)
    const dispatch = useDispatch()
    const onTemplate = name =>{
        dispatch(onChange("templateName", name))
    }

    console.log(resume)

    return(
        <div>
            <h1 className="heading">Templates</h1>
            <div className="grid grid-cols-4 gap-1 mt-7">
                {
                    templates.map((template, index)=>(
                        <div key={index}>
                            <h1 className="font-medium">{template.code}{"("+template.name+")"}</h1>
                            <div onClick={()=>onTemplate(template.name)} className="max-h-[182px] max-w-[142px] cursor-pointer">
                                {/* <span className="max-h-[182px] max-w-[142px] cursor-pointer"> */}
                                    <img 
                                        height={180}
                                        width={140}
                                        className="border border-black"
                                        src={template.image}
                                    />
                                {/* </span>  */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}