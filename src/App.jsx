import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom"

import Preview from "./pages/preview"
import AddResume from "./pages/add-resume"
import BuildResume from "./pages/build-resume"
import UpdateResume from "./pages/update-resume"
import Resumes from "./pages/resumes"
import NotFound from "./pages/notFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resumes />} />
        <Route path="/pdf" element={<Preview />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/build-resume" element={<BuildResume />} />
        <Route path="/update-resume/:id" element={<UpdateResume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
