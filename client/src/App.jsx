import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Add, Books, Update } from "./pages";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
