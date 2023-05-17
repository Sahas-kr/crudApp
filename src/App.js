import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Studentlist from "./components/studentlist/studentlist";
import CreateStudent from "./components/home/createstudent";
import EditStudent from "./components/studentlist/EditStudent";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateStudent/>}/>
      <Route path="/Createstudent" element={<CreateStudent/>}/>
      <Route path="/Studentlist" element={<Studentlist/>}/>
      <Route path="/EditStudent/:id" element={<EditStudent/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
