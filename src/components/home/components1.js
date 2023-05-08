import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Components1() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand text-success " style={{ marginLeft: "50px" }} href="/">React
            <i class="fa-brands fa-react fa-spin fa-lg mx-1"></i></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mx-5">
              <li class="nav-item">
                <a class="nav-link text-primary" id='bg' href="/Createstudent">Create Student</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" id='bg' href="/Studentlist">Student List</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Components1;