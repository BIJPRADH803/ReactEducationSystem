import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { baseUrl } from "../util/AppConstants";
import "../css/ListAllTrainer.css";
import NavBarAdmin from "./NavBarAdmin";

function ListAllTrainers() {
  const [trainers, setTrainers] = useState([]);
 const fetchAll = () => {
    axios
      .get(
        "http://localhost:8081/trainers/all"
      )
      .then((resp) => setTrainers(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container" style={{marginTop:"7%"}}>
     <NavBarAdmin/>

       <div className="mrginlistalltrainer" style={{fontsize:"20px"}}> <a class="previous">&laquo;</a> 
      <Link to="/admin/dashboard"  style={{color:"chocolte"}} className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">List All Trainers</h4>
      <hr />
      
      <Link to = "/trainer/save" className = "btn btn-primary mb-2" > Add Trainer </Link>
      <table  className="table table-bordered table-striped">
        <thead  class="thead-dark">
          <tr>
            <th>TrainerId</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>View</th>
            <th>Edit/Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((t, index) => (
            <tr  class="table-info" key={index}>
              <td>{t.trainerId}</td>
              <td>{t.firstName}</td>
              
              <td>{t.lastName}</td>
              <td>
                <Link to={`/trainer/view/${t.trainerId}`}   className = "btn btn-primary mb-2" >View</Link>
              </td>
              <td>
                <Link to={`/trainer/edit/${t.trainerId}`}  className = "btn btn-primary mb-2" >Update</Link>
              </td>
              <td>
                <Link to={`/trainer/delete/${t.trainerId}`}  className = "btn btn-primary mb-2" >Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
export default ListAllTrainers;
