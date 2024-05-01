import { Link } from "react-router-dom"
import Layout from "../../../components/dashboard/layout"
import { RiDeleteBin6Line, FaRegEdit } from "../../../icons"
import { useGetResumesQuery, useDeletePostMutation } from "../../../store/api"

export default function Posts(){
    const { data, isLoading } = useGetResumesQuery()
    const [deletePost] = useDeletePostMutation()

    const handleDelete = async id =>{
        await deletePost(id)
    }

    return(
        <Layout>
            <div className="p-3">
                <div className="flex justify-between">
                    <h1 className="text-3xl fort-semibold">Resumes</h1>
                    <Link to="/dashboard/add-post" className="bg-primary-deep text-white py-2 px-3">Add New</Link>
                </div>
                {!isLoading && <div className="mt-5">
                    <table className="w-full mt-7">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((resume, index)=><tr key={index} className="py-2">
                                    <td>{index+1}</td>
                                    <td>{resume.email}</td>
                                    <td>{resume.firstName+" "+ resume.surName}</td>
                                    <td className="flex gap-2">
                                        <Link to={`/admin/edit-post/${resume._id}`} className="cursor-pointer"><FaRegEdit size={20}/></Link> 
                                        <span onClick={()=>handleDelete(resume._id)} className="cursor-pointer"><RiDeleteBin6Line size={20}/></span> 
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>}
            </div>
        </Layout>
    )
}