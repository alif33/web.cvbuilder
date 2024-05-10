import { useState } from "react"
import { PDFViewer, Page, View, Text } from '@react-pdf/renderer'
import { useParams } from "react-router-dom"
import Template from "../../templates"
import { IoClose } from "../../icons"
import { useSelector } from "react-redux"

const containerStyle = { width: '100%', height: '100vh' }

const Preview = () => {
  const [mode, setMode] = useState("panel")
  const resume = useSelector(state=>state.sample)

  return(
    <div>
      <div className="absolute bottom-1 right-5 w-14 h-14 bg-white rounded-full">
        <span onClick={()=>setMode("panel")} className="flex h-14 justify-center items-center cursor-pointer">
          <IoClose size={30}/>
        </span>
      </div>
      <PDFViewer style={containerStyle}>
        <Page size="A4">
          <View>
            <Text>Section #1</Text>
          </View>
        </Page>
        {/* <Template data={resume}/> */}
      </PDFViewer>
    </div>
  )
}

export default Preview