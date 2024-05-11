/* eslint-disable react/prop-types */
import { Font } from "@react-pdf/renderer"
import Aob from "../templates/aob"
// import Aoc from "../templates/aoc"
// import Aod from "../templates/aod"

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
                src: `/fonts/Montserrat/Medium.ttf`,
                fontWeight: 'medium'
            },
            {
                src: `/fonts/Montserrat/SemiBold.ttf`,
                fontWeight: 'semibold'
            },
            {
                src: `/fonts/Montserrat/Bold.ttf`,
                fontWeight: 'bold'
            },
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

// const temps = {
//     aob: Aob,
//     aoc: Aoc,
//     aod: Aod,
// }

export default function Templates({ data }){
    // const Template = temps[`${data?.templateName}`] || Aod
    const Template =  Aob

    return(
        <Template data={data}/>
    )
}
 