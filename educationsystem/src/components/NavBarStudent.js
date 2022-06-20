import React from "react";
//import "../css/demobootstrapportfoliowesite.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export default function NavBarStudent() {
  const myUser = JSON.parse(localStorage.getItem("myUser"));
  const navigate = useNavigate();
  const studentLogout = () => {
    if (myUser != null) {
      localStorage.removeItem("myUser");
      localStorage.clear();
      alert("You have successfully logot.........");
      navigate("/");
    }
  };

  return (
    <div>
      <nav
        className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar"
        style={{ marginBottom: "0px" }}
      >
        <div className="container">
          <div className="navbar-brand" style={{ marginBottom: "10px" }}>
            <b style={{ color: "white" }}>education hub</b>
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
                <Link className="nav-link" to="/student/view/course">
                  <small>Courses</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add/feedback">
                  <small>Add Feedback</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/student/view/messages" className="nav-link">
                  <small>Message</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/student/view/trainers" className="nav-link">
                  <small>Trainer</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/student/view/material" className="nav-link">
                  <small>Material</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/student/view/test" className="nav-link">
                  <small>viewtest</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/view/student/301" className="nav-link">
                  <small>Myprofile</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={studentLogout}>
                  <small>Logout</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
