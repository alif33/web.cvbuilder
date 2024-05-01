import { useEffect, useRef } from "react"

const UploadWidget = ({ setImage }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: 'detkugywt',
        uploadPreset: 'cvbuilderpro',
        multiple: false,
        resourceType: "auto",
        clientAllowedFormats: ["png", "jpg", "jpeg", "gif"],
        maxFileSize: 2000000,
        defaultSource: "local",
        sources: ["local"],
    }, function(error, result){
        if (!error && result && result.event === "success") {
          setImage(result.info)
        } else if (error) {
          console.error("Upload error:", error)
        }
    })
  }, [])

  return (
      <button className="px-5 py-2 text-primary-deep border-dotted border-2 border-primary-deep" onClick={() => widgetRef.current.open()}>
        Upload
      </button>
  );

};

export default UploadWidget
