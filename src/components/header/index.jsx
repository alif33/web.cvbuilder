"use client"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Header = () =>{

    return(
        <div className="bg-primary-lite border-b">
            <div className="w-[90%] h-[60px] lg:h-[80px] relative mx-auto">
                <div className="absolute top-4 left-3 ">
                    <span 
                        onClick={()=>console.log("Back...")} 
                        className="block lg:hidden cursor-pointer"
                    ><FaArrowLeft size={22}/></span>
                </div>
                <div className="flex h-full items-center justify-center lg:justify-start">
                    <Link to="/">
                        <h1 className="text-xl lg:text-2xl font-bold">CV Builder <span className="text-primary-deep italic">Pro</span></h1>               
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header