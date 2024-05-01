export default function NotFound(){

    return(
        <div className="flex h-screen justify-center items-center">
            <div>
                <h1 className="text-5xl font-semibold text-red-400 text-center">404 - Not Found</h1>
                <p className="text-center text-lg font-semibold text-primary-deep mt-5">Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    )
}
