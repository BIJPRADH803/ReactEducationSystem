import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { baseUrl } from "../util/AppConstants";
import "../css/ListAllFeedbacks.css";
import NavBarAdmin from "./NavBarAdmin";

function ViewAllFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

 

  const fetchAll = () => {
    axios
      .get(
        "http://localhost:8081/api/edu/feedback/all"
      )
      .then((resp) => setFeedbacks(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container" style={{marginTop:"7%"}}>

      <NavBarAdmin/>
    

       <div style={{fontSize:"25px"}}className="mrginlistallfdbck"> <a class="previous">&laquo;</a> 
      <Link to="/admin/dashboard" style={{ color: "chocolate"}} className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">List All Feedbacks</h4>
      <hr />
      
      
      <table  className="table table-bordered table-striped">
        <thead  class="thead-dark">
          <tr>
            <th>Feedback Id</th>
            <th>Feedback</th>
            

            {/* <th>View</th>
            <th>Edit/Update</th>
            <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f, index) => (
            <tr  class="table-info" key={index}>
              <td>{f.id}</td>
              <td>{f.feedback}</td>
{/*             
              <td>
                <Link to={`/trainer/view/${t.trainerId}`}   className = "btn btn-primary mb-2" >View</Link>
              </td>
              <td>
                <Link to={`/trainer/edit/${t.trainerId}`}  className = "btn btn-primary mb-2" >Update</Link>
              </td>
              <td>
                <Link to={`/trainer/delete/${t.trainerId}`}  className = "btn btn-primary mb-2" >Delete</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
export default ViewAllFeedbacks;
