import Axios from "axios";
import { useEffect, useState } from 'react';
import Components5 from "./components5";

export default function Components4() {

    const [student, setStudent] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8000/student')
            .then(res => {
                if (res.status === 200) {
                    setStudent(res.data);
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err))
    })

    let handleClick = () => {
        return student.map((val,ind) => {
            return <Components5 details={val} object={ind} />
        })
    }

    return (
        <div className="container bg-white" style={{position:"relative", marginTop:"0"}}>

            <table class="table table-bordered table-hover table-striped  border-secondary" style={{ marginTop: "0px" }}>
                <thead class="table-primary border-primary">
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Student ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {handleClick()}
                </tbody>
            </table>
            {/* {console.log(student)} */}
        </div>
    )
}