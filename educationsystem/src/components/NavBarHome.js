import React from "react";
import { Link } from "react-router-dom";
 import "../css/demobootstrapportfoliowesite.css";
export default function NavBarHome() {
  return (
   
    <div>
      <nav  style={{ backgroundColor:"black" }} className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar">
        <div className="container">
          <div className="navbar-brand" style={{ marginBottom: "18px" }}>
          
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
              <li  className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <small style={{ color:  "white" }}>Home</small>
                </Link>
              </li>
              <li  className="nav-item">
                <a className="nav-link" href="#Courses">
                  <small style={{ color: "white" }}>Courses</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <small style={{ color:  "white" }}>Contact</small>
                </a>
              </li>

              <li className="nav-item">
                <Link to="/student/login" className="nav-link">
                  <small  style={{ color:  "white" }}>Student Login</small>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/admin/login" className="nav-link">
                  <small  style={{ color:  "white" }}>Admin Login</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
