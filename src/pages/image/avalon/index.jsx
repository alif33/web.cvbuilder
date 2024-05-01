import React from "react";
import Section from "./section";
import { useSelector } from "react-redux";

const Avalon = () =>{
    const { heading, experiences, summary } = useSelector(state=>state.sample)

    return(
        <div>
            <div className="py-4 bg-slate-300 border-b">
                <h1 className="text-3xl text-center">{heading?.firstName} {heading?.surName}</h1>
                <h2 className="uppercase font-medium text-center">Textile engineer</h2>
            </div>
            <div className="flex min-h-screen">
                <div className="basis-4/12 border-r pl-3">
                    <div>
                        <h2 className="uppercase font-medium py-3">Contact</h2>
                        <ul className="text-[12px]">
                            <li>{heading.email}</li>
                            <li>{heading.phone}</li>
                            <li>{heading.city}, {heading.country}</li>
                        </ul>
                    </div>
                </div>
                <div className="basis-8/12 px-3">
                    <Section
                        type="summary"
                        heading="Summary"
                        summaryDescription={summary}
                    />
                    <Section
                        type="experience"
                        heading="Experience"
                        experiences={experiences}
                    />
                    <Section
                        type="education"
                        heading="Education"
                        experiences={experiences}
                    />
                    
                </div>
            </div>
        </div>
    )
}
export default Avalon;