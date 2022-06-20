import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import "../css/demobootstrapportfoliowesite.css";

export default function NavBarAdmin() {
    
    const myUser =JSON.parse(localStorage.getItem("myUser"));
    const navigate = useNavigate();
    const adminLogout = () => {
        if(myUser != null){
        localStorage.removeItem("myUser");
        localStorage.clear();
               alert("You have successfully logot.........");
         navigate("/")
        }
      };
      
  return (
    <div>
         <nav className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar">
        <div className="container">
          <div className="navbar-brand" style={{ marginBottom: "15px" }}>
           
            <b style={{ color: "#683aa4" }}>education hub</b>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginBottom: "20px" }}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/getAllCourse">
                  <small>Course</small>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/getAllTest">
                  <small>Test</small>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewall/feedbacks">
                  <small>Feedback</small>
                </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/getAllTrainers" className="nav-link">
                  <small>Trainers</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/getAllStudents" className="nav-link">
                  <small>Student</small>
                </Link>
              </li>
              
              {/* <li className="nav-item">
                <Link to=" /add-material" className="nav-link">
                  <small>Add Material</small>
                </Link>
              </li> 

                 */}     
              <li className="nav-item">
                <Link to="/getAllMaterial" className="nav-link">
                  <small> Material</small>
                </Link>
              </li> 
              
              
              <li className="nav-item">
                <Link to="/viewAll/messages" className="nav-link">
                  <small>Message</small>
                </Link>
              </li>

              
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={adminLogout}>
                  <small>Logout</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
  }
    
