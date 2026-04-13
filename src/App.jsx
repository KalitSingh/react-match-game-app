import { BrowserRouter, Routes, Route } from "react-router-dom"

import MatchGameMain from "./pages/MatchGameMain"
import InstructionPage from "./pages/InstructionPage"
import NotFound from "./pages/NotFound"

const App = () => {
  return(
  <>
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<InstructionPage />} />
          <Route path="/matchgame" element={<MatchGameMain/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App