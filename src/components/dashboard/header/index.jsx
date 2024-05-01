export default function Header(){
    return(
        <div className="h-14 bg-primary-lite">
            <div className="flex h-full justify-between items-center w-[95%] mx-auto">
                <div>
                    <h1 className="text-xl font-semibold">Cv Builder <span className="text-primary-deep">Pro</span></h1>
                </div>
                <div>
                    <ul className="text-sm font-semibold">
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}