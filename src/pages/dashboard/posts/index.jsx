import { Link } from "react-router-dom"
import Layout from "../../../components/dashboard/layout"
import { RiDeleteBin6Line, FaRegEdit } from "../../../icons"
import { useGetPostsQuery, useDeletePostMutation } from "../../../store/api"

export default function Posts(){
    const { data, isLoading } = useGetPostsQuery()
    const [deletePost] = useDeletePostMutation()

    const handleDelete = async id =>{
        await deletePost(id)
    }

    return(
        <Layout>
            <div className="p-3">
                <div className="flex justify-between">
                    <h1 className="text-3xl fort-semibold">Posts</h1>
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
                                data?.posts.map((post, index)=><tr key={index} className="py-2">
                                    <td>{index+1}</td>
                                    <td>{post.title}</td>
                                    <td className="flex gap-2">
                                        <Link to={`/admin/edit-post/${post._id}`} className="cursor-pointer"><FaRegEdit size={20}/></Link> 
                                        <span onClick={()=>handleDelete(post._id)} className="cursor-pointer"><RiDeleteBin6Line size={20}/></span> 
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