import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom"

import Image from "./pages/image"
import Editor from "./pages/editor"
import Download from "./pages/download"
import Preview from "./pages/preview"
import AddResume from "./pages/dashboard/add-resume"
import Resumes from "./pages/dashboard/resumes"
import Posts from "./pages/dashboard/posts"
import AddPost from "./pages/dashboard/add-post"
import ResumeExamples from "./pages/dashboard/resume-examples"
import AddResumeExample from "./pages/dashboard/add-resume-example"
import NotFound from "./pages/notFound"
import Catalyst from "./templates/catalyst"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resumes />} />
        <Route path="/image" element={<Image />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/getcv/:_id" element={<Download />} />
        <Route path="/pdf" element={<Preview />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/dashboard/posts" element={<Posts />} />
        <Route path="/dashboard/add-post" element={<AddPost />} />
        <Route path="/dashboard/resume-examples" element={<ResumeExamples />} />
        <Route path="/dashboard/add-resume-example" element={<AddResumeExample />} />
        <Route path="/cat" element={<Catalyst />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
