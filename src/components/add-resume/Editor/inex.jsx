import Heading from "../Heading"
import Education from "../Education"
import Experience from "../Experience"
import Skills from "../Skills"
import Reference from "../Reference"
import Personal from "../Personal"
import Image from "../Image"
import Signature from "../Signature"
import Passport from "../Passport"
import Textarea from "../Textarea"

export default function Editor(){
    return(
        <div>
            <Heading/>
            <Education/>
            <Experience/>
            <Skills/>
            <Reference/>
            <Personal/>
            <Textarea/>
            <Image/>
            <Signature/>
            <Passport/>
        </div>
    )
} 