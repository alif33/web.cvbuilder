import SyncLoader from "react-spinners/ClockLoader"

export default function Spinner({ isLoading }){
    return(
        <div className="flex min-h-screen justify-center items-center">
            <div className="flex flex-col gap-5">
                <SyncLoader className="mx-auto" color="#36d7b7" />
                {
                    isLoading? <h1 className="text-3xl font-semibold text-center">Checking</h1>: 
                    <h1 className="text-3xl font-semibold text-center">Searching</h1>
                    
                }
            </div>
        </div>
    )
}