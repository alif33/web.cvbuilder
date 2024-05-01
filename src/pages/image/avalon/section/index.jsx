import React from 'react';

const Section = ({ 
    type, 
    heading, 
    summaryDescription,
    experiences
}) =>{
    return(
        <>
            <div className="pt-2">
                <span className="uppercase font-medium border-b-[4px] pt-2 pb-1">{heading}</span>
                {type==="summary" && (
                    <h5 className="text-[12px] mt-1">{summaryDescription}</h5>
                )}
                {type==="experience" && experiences.map((item, index)=>(
                    <div className="mb-2 mt-1" key={index}>
                        <h3 className="py-[1px] text-[12px] font-medium">{item.title}</h3>
                        <h4 className="py-[1px] text-[12px] font-medium">{item.employer}, {item.city}</h4>
                        <h4 className="py-[1px] text-[12px]">{item.startingDate} - {item.endDate}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Section;