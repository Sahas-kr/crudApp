import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from "react-router-dom";

function Components1() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand text-success " style={{ marginLeft: "50px" }} to="/">React
            <i class="fa-brands fa-react fa-spin fa-lg mx-1"></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mx-5">
              <li class="nav-item">
                <Link class="nav-link text-primary" id='bg' to="/Createstudent">Create Student</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-primary" id='bg' to="/Studentlist">Student List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Components1;