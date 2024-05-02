import Education from "../../../components/add-resume/Education"
import Heading from "../../../components/add-resume/Heading"
import Summary from "../../../components/add-resume/Summary"
import Experience from "../../image/form/experience"

export default function AddResume(){

    return(
        <div className="flex max-h-screen mx-5 overflow-y-hidden">
            <div className=" basis-2/12">
                <ul>
                    <li><a href="/add-resume/#heading">Heading</a></li>
                    <li><a href="/add-resume/#summary">Summary</a></li>
                    <li><a href="/add-resume/#education">Education</a></li>
                    <li><a href="/add-resume/#experience">Experience</a></li>
                    <li><a href="/add-resume/#skills">Skills</a></li>
                    <li><a href="/add-resume/#passport">Passport</a></li>
                </ul>
            </div>
            <div className="min-h-screen basis-6/12 overflow-y-scroll">
                <form action="">
                    <Heading/>
                    <Summary/>
                    <Education/>
                    <Experience/>
                </form>
            </div>
            <div className=" basis-4/12">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste animi, hic sed optio mollitia nostrum ullam nemo! Veniam, quia rem!</h1>
            </div>
        </div>
    )
}