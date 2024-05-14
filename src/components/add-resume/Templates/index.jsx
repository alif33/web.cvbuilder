import { useDispatch, useSelector } from "react-redux"
import templates from "../../../static/templates.json"
import { onChange } from "../../../store/sample/action"

export default function Templates(){
    const resume = useSelector(state=>state.sample)
    const dispatch = useDispatch()
    const onTemplate = name =>{
        dispatch(onChange("templateName", name))
    }

    return(
        <div id="templates" className="mb-20 pt-5 min-h-screen">
            <h1 className="heading">Templates</h1>
            <div className="grid grid-cols-4 gap-x-3 gap-y-7 mt-7">
                {
                    templates.map((template, index)=>(
                        <div key={index}>
                            <h1 className="font-medium">{template.code}{"("+template.name+")"}</h1>
                            <div onClick={()=>onTemplate(template.name)} className="max-h-[182px] max-w-[142px] cursor-pointer">
                                <img 
                                    height={180}
                                    width={140}
                                    className="border border-black"
                                    src={template.image}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}