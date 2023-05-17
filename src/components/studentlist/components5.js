import  Axios  from "axios";


export default function Components5(props) {

  const handleDelete = (e) =>{
    e.preventDefault();
    Axios.delete('http://localhost:8000/student/delete-student/' + props.details._id)
    .then(res=>{
      if(res.status === 200){
        window.location.reload();
        alert(props.details.name + ' Deleted');
      }else{
        Promise.reject();
      }
    })
    .catch((err)=>alert((err)))
    // alert(props.details._id)
  }

  


  return (
    <tr>
      <td >{props.details.name}</td>
      <td>{props.details.email}</td>
      <td>{props.details.studentid}</td>
      <td>
       <a href={`/EditStudent/${props.details._id}`} > <button class="btn btn-primary btn-sm mx-2 text-light">Edit</button></a>
        <button class="btn btn-danger btn-sm text-light" onClick={handleDelete}>Delete</button>
      </td>
      {/* <td><button class="btn bg-danger" onClick={handleClick}>Button</button></td> */}
    </tr>
  );
}
