import React from 'react'
// import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import NavBarAdmin from './NavBarAdmin';
 import "../css/studentmanage.css";

export default function AdminDashboard() {


  return (
    <div>
        {/* <h1>ADMIN DASHBOARD</h1>
        <h2>Welcome {myUser.userName}</h2> */}
        <NavBarAdmin />
        <br/> <br/> <br/> <br/>
        <div className="container">
          <div class="card-deck">
           <div class="card">
              {/* <img class="card-img-top" src={logo} alt="Card image cap" /> */}
              <div class="card-body">
                <h3
                  class="card-title"
                  style={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  View All Students
                </h3>

                <p class="card-text" style={{ textAlign: "center" }}>
                  <small class="text-muted">See all registered students</small>
                </p>

                <Link to="/getAllStudents">
                  <button id="btn-manage">View Students </button>
                </Link>
              </div>
            </div>

             <div class=" card">
            <div class="card-body">
                <h3
                class="card-title"
                style={{ textAlign: "center", fontWeight: "bolder" }}
              >
               View All Payment Records
              </h3>

             <p class="card-text">
                See all the list of payment enroll by student
              </p>
                <Link to="/view/all/payment">
                <button id="btn-manage" >View List of payment</button>
              </Link>
            </div> 
          </div>

         
            </div>
          </div>
        </div>



    
  )
}
