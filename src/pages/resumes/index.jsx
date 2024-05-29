import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/dashboard/layout"
import { getAllResumes } from "../../db/queries"
import { RiDeleteBin6Line, FaRegEdit } from "../../icons"
// import { useGetResumesQuery, useDeletePostMutation } from "../../store/api"

export default function Posts(){
    const [data, setData] = useState([])
    // const { data, isLoading } = useGetResumesQuery()
    // const [deletePost] = useDeletePostMutation()

    useEffect(()=>{
        getAllResumes()
        .then(res=>{
            setData(res)
            // console.log(res)
        })
        .catch(err=>{console.log(err)})

    }, [])


    // const handleDelete = async id =>{
    //     await deletePost(id)
    // }

    return(
        <Layout>
            <div className="p-3">
                <div className="flex justify-between">
                    <h1 className="text-3xl fort-semibold">Resumes</h1>
                    <Link to="/dashboard/add-post" className="bg-primary-deep text-white py-2 px-3">Add New</Link>
                </div>
                <div className="mt-5">
                    <table className="w-full mt-7">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((resume, index)=><tr key={index} className="py-2">
                                    <td>{index+1}</td>
                                    <td><img height={40} width={40} src={resume?.image?.secure_url}/></td>
                                    <td>{resume.email}</td>
                                    <td>{resume?.heading?.firstName+" "+ resume?.heading?.surName}</td>
                                    <td className="flex gap-2">
                                        <Link to={`/update-resume/${resume.id}`} className="cursor-pointer"><FaRegEdit size={20}/></Link> 
                                        {/* <span onClick={()=>handleDelete(resume._id)} className="cursor-pointer"><RiDeleteBin6Line size={20}/></span>  */}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}