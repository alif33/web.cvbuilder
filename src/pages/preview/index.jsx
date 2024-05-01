import { PDFViewer } from '@react-pdf/renderer'
import { useParams } from "react-router-dom"
import Template from "../../templates"
import resume from "../../static/resume.json"

const containerStyle = { width: '100%', height: '100vh' }

const Preview = () => {
  const { name } = useParams()
  const { heading, experience, education, skills, summary } = resume

  return(
    <PDFViewer style={containerStyle}>
        <Template 
            templateName={name}
            heading={heading}
            experience={experience}
            education={education}
            skills={skills}
            summary={summary}
        />
    </PDFViewer>
  )
}

export default Preview