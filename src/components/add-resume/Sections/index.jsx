import ImportFile from "../ImportFile"
import Layout from "../Layout"
import Templates from "../Templates"
import Heading from "../Heading"
import Education from "../Education"
import Experience from "../Experience"
import Skills from "../Skills"
import Language from "../Language"
import Reference from "../Reference"
import Training from "../Training"
import Personal from "../Personal"
import Textarea from "../Textarea"
import Image from "../Image"
import Signature from "../Signature"
import Passport from "../Passport"
import Custom from "../Custom"

export default function Sections(){
    return(
        <div>
            <Templates/>
            <Layout/>
            <ImportFile/>
            <Heading/>
            <Education/>
            <Experience/>
            <Skills/>
            <Language/>
            <Reference/>
            <Training/>
            <Personal/>
            <Textarea/>
            <Image/>
            <Signature/>
            <Passport/>
            <Custom/>
        </div>
    )
} 