import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Add, Books, Update } from "./pages";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
