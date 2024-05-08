/* eslint-disable react/prop-types */
import { Font } from "@react-pdf/renderer"
import Alpha from "./bita"
import Bita from "../templates/bita"
import Catalyst from "../templates/catalyst"
import Gama from "../templates/bita"
import Delta from "../templates/delta"
import Orange from "../templates/orange"

Font.registerHyphenationCallback(word => [word])
Font.register(
    /* 
    Montserrat 
*/
    { 
        family: 'Montserrat', 
        fonts: [
            {
                src: `/fonts/Montserrat/Regular.ttf`
            },
            {
                src: `/fonts/Montserrat/Montserrat-Bold.ttf`,
                fontWeight: 'bold'
            },
            {
                src: `/fonts/Montserrat/Regular.ttf`,
                fontWeight: 'normal',
                fontStyle: 'italic'
            },
            {
                src: `/fonts/Montserrat/Montserrat-BoldItalic.ttf`,
                fontWeight: 'bold',
                fontStyle: 'italic'
            }
        ]
    },



    // { 
    //     family: 'Epilogue', 
    //     fonts: [
    //         {
    //             src: `/fonts/epilogue/Epilogue-Regular.ttf`
    //         },
    //         {
    //             src: `/fonts/epilogue/Epilogue-Bold.ttf`,
    //             fontWeight: 'bold'
    //         },
    //         {
    //             src: `/Roboto-Italic.ttf`,
    //             fontWeight: 'normal',
    //             fontStyle: 'italic'
    //         },
    //         {
    //             src: `/Roboto-BoldItalic.ttf`,
    //             fontWeight: 'bold',
    //             fontStyle: 'italic'
    //         }
    //     ]
    // },

    // Roboto
    // { 
    //     family: 'Roboto', 
    //     fonts: [
    //         {
    //             src: `/fonts/Roboto-Bold.ttf`
    //         },
    //         {
    //             src: `/Roboto-Bold.ttf`,
    //             fontWeight: 'bold'
    //         },
    //         {
    //             src: `/Roboto-Italic.ttf`,
    //             fontWeight: 'normal',
    //             fontStyle: 'italic'
    //         },
    //         {
    //             src: `/Roboto-BoldItalic.ttf`,
    //             fontWeight: 'bold',
    //             fontStyle: 'italic'
    //         }
    //     ]
    // },
);

const temps = {
    // alpha: Alpha,
    // bita: Bita,
    // catalyst: Catalyst,
    // gama: Gama,
    // delta: Delta,
    orange: Orange,
}

export default function Templates({ data }){
    const Template = temps[`${data?.templateName}`] || Orange

    return(
        <Template data={data}/>
    )
}
 