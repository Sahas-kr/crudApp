import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


function Components2(props) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [studentid,setStudentid] = useState('');

  const inputName = (e)=>{
    setName(e.target.value);
  }
  const inputEmail =(e)=>{
    setEmail(e.target.value);
  }
  const inputStudentid = (e)=>{
    setStudentid(e.target.value);
  }
  const arr = [name, email, studentid];
  const onAbc = ()=>{
    return(props.getDetails(arr));
  }


  return (
    <div>
      <div className="container">
        <div className="head">
          <h1>Create Student</h1>
        </div>
        <div className="form">
          <div className="form_control">
            <label>Student Name: </label>
            <input type="text" placeholder="Enter Student Name" id="sname" onChange={inputName} />
          </div>
          <div className="form_control">
            <label>Email: </label>
            <input type="email" placeholder="Enter email" id="email"  onChange={inputEmail} />
          </div>
          <div className="form_control">
            <label>Student ID: </label>
            <input type="number" placeholder="Enter Student ID" id="sid"  onChange={inputStudentid} />
          </div>
        </div>
        <button className="button" type="submit" id="submit" onClick={onAbc} >
          Create Student
        </button>
      </div>
    </div>
  );
}

export default Components2;
