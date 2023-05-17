import { useEffect, useState } from "react";
import Components1 from "../home/components1";
import Components2 from "../home/components2";
import { useParams } from "react-router-dom";
import  Axios  from "axios";




function EditStudent(){

        const [formValues, setFormValues] = useState({name:"",email:"", studentid:""})
        const [formDetails, setFormDetails] = useState([]);

        const getDetails = (n) =>{
            setFormDetails(n)
        }

        const {id} = useParams();

        const handleUpdate = ()=>{
            Axios.put('http://localhost:8000/student/EditStudent/:' + id,
            {name:formDetails[0],email:formDetails[1],studentid:formDetails[2]})
            .then((res)=>{
                if (res.status===200){
                    alert("student Updated Successfully");
                    window.location.assign("http://localhost:3000/Studentlist");
                }else{
                    Promise.reject();
                }
            })
            .catch((err)=>alert("Rejected"));
        };


    useEffect(()=>{
        Axios.get('http://localhost:8000/student/EditStudent/' + id)
        .then(res=>{
                const {name,email,studentid} = res.data;
                setFormValues({name,email,studentid})
        })
        .catch((err)=> alert((err)));
    },[id]);
    return(
        <div>
            <Components1/>
            <form onSubmit={handleUpdate}>
            <Components2 button="Update" heading="Update Student" getDetails={getDetails} nameValue={formValues.name} emailValue={formValues.email} studentidValue={formValues.studentid}/>
            </form>
        </div>
    )
}

export default EditStudent;