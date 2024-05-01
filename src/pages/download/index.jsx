import { PDFDownloadLink } from '@react-pdf/renderer'
import Template from "../../templates"
import Button from '../../ui/button/download'
import PulseLoader from "react-spinners/PulseLoader"
import Header from '../../components/header'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setInfo } from "../../store/information/action"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../db"

const Download = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { _id } = useParams()
  const { templateName, heading, experience, education, skills, summary } = useSelector(state=>state.information)
  const dispatch = useDispatch()

  useEffect(()=>{
    setIsLoading(true)
    const resumeDocRef = doc(db, "resumes", _id)
    const unsubscribe = onSnapshot(resumeDocRef, (snap) => {
        if (snap.exists()) {
            console.log(snap.data());
            dispatch(setInfo(snap.data()))
            setIsLoading(false)
        }
    })
      return () => unsubscribe()
  }, [])


  return(
    <div className="min-h-screen">
        <Header/>
        {
          isLoading ? <div className="flex justify-center mt-44"><h1>loading...</h1></div>: (
            <div className="flex justify-center mt-44">
              <PDFDownloadLink document={<Template 
                templateName={templateName}
                heading={heading}
                experience={experience}
                education={education}
                skills={skills}
                summary={summary}
              />} fileName="resume.pdf">
                {({ loading }) => (loading ? <PulseLoader color="#36d7b7" /> : <Button>Download Pdf</Button>)}
              </PDFDownloadLink>
            </div>
          )
        }
    </div>
  )
}

export default Download