import { useState } from "react"
import ReactQuill from "react-quill"
import { NodeParser } from "../../lib/nodeParser"
import "react-quill/dist/quill.snow.css"
import conf from "../../config/react-quill"


const mapDataToJSX = (data) => {
    return data.map((item, index) => {
      if (item.type === "span") {
        return (
          <span key={index}>
            {mapDataToJSX(item.data)}
          </span>
        );
      } else if (item.type === "strong") {
        return (
          <strong key={index}>
            {mapDataToJSX(item.data)}
          </strong>
        );
      } else if (item.type === "em") {
        return (
          <em key={index}>
            {mapDataToJSX(item.data)}
          </em>
        );
      } else if (item.type === "u") {
        return (
          <u key={index}>
            {mapDataToJSX(item.data)}
          </u>
        );
      } else if (item.type === "text") {
        return <span key={index}>{item.data}</span>;
      }
      // You can add more conditions for other types as needed
      return null;
    });
  };





export default function Editor(){
    const [__text, setText] = useState();

    const contents = NodeParser(__text) || false

    return(
        <div className="flex mx-auto mt-10">
            <div className="basis-1/2">
                <div className="p-3 min-h-80">
                    <ReactQuill 
                        {...conf} 
                        value={__text} 
                        onChange={e=>setText(e)} 
                    />
                </div>
                <div className="flex justify-center">
                    <button className="bg-primary-deep font-bold text-white px-5 py-2">Test</button>
                </div>
            </div>
            <div className="basis-1/2">
                <h1 className="text-2xl font-semibold text-center">Output</h1>
                {
                    contents.map((paragraph, index)=>(
                        <p key={index}>{mapDataToJSX(paragraph.data)}</p>
                    ))
                }
                <p></p>
                {/* {contents.map((con, __con)=>{
                    if (con==="ul") {
                        <span key={__con}></span>
                    }
                    if(con.type==="p"){
                        return(
                            <span key={__con}>
                                <h1>Ismail</h1>
                                {con?.data.map((para, __para)=>{
                                    if (para) {
                                        return(
                                        <span key={__para}>
                                                {para.data.map((child, __child)=>{
                                                    // let hasArray = Array.isArray(child)
                                                    // if(!hasArray){
                                                    //     return(
                                                    //         <span key={__child}>
                                                    //             {child.data}
                                                    //         </span>
                                                    //     )
                                                    // }  
                                                })}
                                        </span> 
                                        )
                                    }
                                })}
                            </span> 
                       )
                    }
                })} */}
            </div>
        </div>
    )
}
