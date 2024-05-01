import { useState } from "react"
import toast from "react-hot-toast"
import ReactQuill from "../../../ui/react-quill"
import Layout from "../../../components/dashboard/layout"
// import { 
//     useGetCategoriesQuery, 
//     useOnPostMutation 
// } from "@/store/api"
// import { CldUploadWidget } from "next-cloudinary"


export default function Posts(){
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [metaDescription, setMetaDescription] = useState("")
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("")
    // const [onPost] = useOnPostMutation()

    // const { data } = useGetCategoriesQuery()

    const handleDescription = e =>{
        setDescription(e)
    }

    const handleImageUpload = payload =>{
        if (payload.event==="success") {
             setImage(payload.info.url)
        }    
     }
 
     const handleSubmit = async e =>{
         e.preventDefault()
        //  const { data } = await onPost({
        //      title,
        //      category,
        //      metaDescription,
        //      description: JSON.stringify(description),
        //      image
        //  })
 
        //  if (data?.success) {
        //      toast.success(`${data?.message}`)
        //      setTitle("")
        //      setCategory("")
        //      setMetaDescription("")
        //      setDescription("")
        //      setImage(null)
        //  }
     }

    return(
        <Layout>
            <div className="p-5">
                <h1 className="text-2xl font-semibold">New Resume</h1>
                <div className="relative">
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-7">  
                            <div className="basis-8/12 flex flex-col mt-5">
                                <label htmlFor="postTitle" className="text-sm font-medium">Title</label>
                                <input 
                                    id="postTitle"
                                    type="text" 
                                    className="h-10 w-full border-2 rounded-sm pl-2"
                                    value={title}
                                    onChange={e=>setTitle(e.target.value)}
                                />
                            </div>
                            <div className="basis-4/12 flex flex-col mt-5">
                                <label htmlFor="postCategory" className="text-sm font-medium">Category</label>
                                <select 
                                    id="postCategory"
                                    className="h-10 w-full border-2 rounded-sm pl-2"
                                    defaultValue={category}
                                    onChange={e=>setCategory(e.target.value)}
                                >
                                    <option value="">Select categories</option>
                                    {/* {
                                        data?.categories.map((category, index)=>(
                                            <option key={index} value={category.id}>{category.name}</option>
                                        ))
                                    } */}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col my-5">
                            <label htmlFor="metaDescription" className="text-sm font-medium">Meta Description</label>
                            <textarea 
                                id="metaDescription" 
                                cols="3" 
                                rows="3"
                                value={metaDescription}
                                onChange={e=>setMetaDescription(e.target.value)}
                                className="border-2 p-2"
                            ></textarea>
                        </div>
                        <div>
                            <ReactQuill
                                value={description}
                                handleChange={handleDescription}
                            />
                        </div>
                        {
                            image && (
                                <div className="py-5">
                                    <Image
                                        width={200}
                                        height={200}
                                        src={image}
                                        alt="image"
                                    />
                                </div>
                            )
                        }
                        <div className="flex justify-center mt-14">
                            <button className="h-10 px-9 bg-primary-deep text-white rounded-sm">Submit</button>
                        </div>
                    </form>
                    <div className="absolute left-2 bottom-9">
                        {/* <CldUploadWidget  
                            onSuccess={handleImageUpload}
                            uploadPreset="cvbuilderpro"
                        >
                            {({ open }) => {
                                return (
                                    <button 
                                        className="border border-primary-deep text-primary-deep py-2 px-3" 
                                        onClick={() =>open()}
                                    >
                                        Upload an Image
                                    </button>
                                )
                            }}
                        </CldUploadWidget>  */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}