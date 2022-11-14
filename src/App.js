import './App.css';
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/editor/:id" element={<Editor/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
