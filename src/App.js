import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Studentlist from "./components/studentlist/studentlist";
import CreateStudent from "./components/home/createstudent";
import EditStudent from "./components/studentlist/EditStudent";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<CreateStudent/>}/>
      <Route path="/Createstudent" element={<CreateStudent/>}/>
      <Route path="/Studentlist" element={<Studentlist/>}/>
      <Route path="/EditStudent/:id" element={<EditStudent/>}/>
    </Routes>
    </HashRouter>

  );
}

export default App;
