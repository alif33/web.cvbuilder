import Header from "../header"
import Sidebar from "../sidebar"

export default function Layout({ children }){
    return(
        <>
            <Header/>
            <div className="flex coverage">
                <Sidebar/>
                <div className="w-[85%]">
                    {children}
                </div>
            </div>
        </>
    )
}