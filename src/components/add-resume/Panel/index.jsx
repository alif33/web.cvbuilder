import { useEffect, useState } from "react"
import { 
    CiImport, 
    LuLayoutPanelLeft,
    IoIosAlbums,
    BiSolidMicrophone,
    MdOutlineAirlineSeatReclineExtra
} from "../../../icons"
import { useNavigate, useLocation } from "react-router-dom"
import Fuse from "fuse.js"

// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"


export default function Panel(){
    const [isListening, setIsListening] = useState(false)
    const [recognition, setRecognition] = useState(null)
    // const [dynamic, setDynamic] = useState("in primary left")
    const [mode, setMode] = useState("")
    // const [command, setCommand] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.hash.replace("#", "")

    const handleMove = id =>{
        const location = document.getElementById(id)
    
        if (location) {
            location.scrollIntoView()
            navigate(`/add-resume/#${id}`)
        }
    }

    const handleAddSection = section=>{
        console.log(section)
    }

    const commands = [
        { command: "templates", action: () => handleMove("templates") },
        { command: "layout", action: () => handleMove("layout") },
        { command: "import", action: () => handleMove("import") },
        { command: "go heading", action: () => handleMove("heading") },
        { command: "go education", action: () => handleMove("education") },
        { command: "go experience", action: () => handleMove("experience") },
        { command: "go skills", action: () => handleMove("skills") },
        { command: "go language", action: () => handleMove("language") },
        { command: "plus heading", action: () => handleAddSection("heading") },
        { command: "plus education", action: () => handleAddSection("education") },
        { command: "plus experience", action: () => handleAddSection("experience") },
        { command: "plus skills", action: () => handleAddSection("skills") },
        { command: "plus reference", action: () => handleAddSection("reference") },
    ]

    const fuseOptions = {
        includeScore: true,
        threshold: 0.4,
        keys: ["command"],
      };
    
    const fuse = new Fuse(commands, fuseOptions)

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
          const recognitionInstance = new window.webkitSpeechRecognition();
          recognitionInstance.continuous = true;
          recognitionInstance.interimResults = true;
          recognitionInstance.lang = 'en-US';
    
          recognitionInstance.onresult = (event) => {
    
            for (let i = 0; i < event.results.length; i++) {

              if (event.results[i].isFinal) {
                const transcript = fuse.search(event.results[i][0].transcript.toLowerCase())
                
                if (transcript.length > 0 && transcript[0].score <= 0.4) {
                  transcript[0].item.action(transcript)
                }
              }
            }
          };
    
          recognitionInstance.onstart = () => setIsListening(true);
          recognitionInstance.onend = () => setIsListening(false);
    
          setRecognition(recognitionInstance);
        } else {
          console.warn('Speech Recognition API not supported in this browser.');
        }
    }, [history])
    
    const handleListen = () => {
        if (recognition) {
            if (isListening) {
                recognition.stop()
            } else {
                recognition.start()
            }
        }
    };


    return(
        <div className="pt-5">
            <div className="flex gap-1 pb-1">
                <span onClick={()=>handleMove("templates")} className={`btn-panel ${currentLocation==="templates"? "bg-black text-white": ""}`}><IoIosAlbums/></span>
                <span onClick={()=>handleMove("layout")} className={`btn-panel ${currentLocation==="layout"? "bg-black text-white": ""}`}><LuLayoutPanelLeft/></span>
                <span onClick={()=>handleMove("import")} className={`btn-panel ${currentLocation==="import"? "bg-black text-white": ""}`}><CiImport/></span>
            </div>
            <div className="flex gap-1">
                <span onClick={()=>handleMove("extra")} className={`btn-panel ${currentLocation==="extra"? "bg-black text-white": ""}`}><MdOutlineAirlineSeatReclineExtra/></span>
                <span onClick={handleListen} className={`btn-panel ${isListening? "bg-black text-white": ""}`}><BiSolidMicrophone/></span>
            </div>
        </div>
    )
} 