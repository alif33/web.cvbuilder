import { useState } from "react"
import toast from "react-hot-toast"
// import { 
//     useGetCategoriesQuery, 
//     useOnCategoryMutation 
// } from "@/store/api"

export default function Categories(){
    const [name, setName] = useState("")
    // const { data, isLoading } = useGetCategoriesQuery()
    // const [onCategory] = useOnCategoryMutation()

    const handleSubmit = async e =>{
        e.preventDefault()
        // const added = await onCategory({name})

        // if(added){
        //     const { data } = added
        //     toast.success(`${data.message}`)
        //     setName("")
        // }
    }

    return(
        <div className="p-5">
            <h1 className="text-2xl font-semibold">Categories</h1>
            <form onSubmit={handleSubmit} action="" className="w-[450px] mx-auto mt-9">
                <div>
                    <label htmlFor="categoryName" className="text-sm font-semibold">Category Name</label>
                    <input 
                        id="categoryName"
                        type="text" 
                        className="border-2 h-10 w-full pl-2"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="flex justify-center mt-5">
                    <button type="submit" className="bg-primary-deep w-40 text-white py-2">Submit</button>
                </div>
            </form>
            {/* {
                !isLoading && (
                    <div>
                        <h1 className="text-xl font-semibold my-3">All Categories</h1>
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.categories.map((category, index)=><tr key={index} className="py-2">
                                        <td className="text-center">{index+1}</td>
                                        <td className="text-center">{category.name}</td>
                                        <td className="text-center">Update</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                )
            } */}
        </div>
    )
}