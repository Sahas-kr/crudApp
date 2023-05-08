import { useState } from "react";
import Components1 from "./components1";
import Components2 from "./components2";
import Axios from "axios";


function CreateStudents(){

    const[obj, setObj] = useState([]);
    const getDetails = (n)=>{
        setObj(n)
        console.log(obj);
    }

    const handleSubmit = ()=>{
        alert('Student Created')
        Axios.post('http://localhost:8000/student/create-student',{name:obj[0],email:obj[1],studentid:obj[2]})
        .then(res => {
            if(res.status === 200){
                alert('Student Created Successfully')
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
    return(
        <div>
            <Components1/>
            <form onSubmit={handleSubmit}>
            <Components2 getDetails={getDetails}/>
            </form>
        </div>
    )
}

export default CreateStudents;