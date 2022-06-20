import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { baseUrl } from "../util/AppConstants";
import "../css/ListAllTrainer.css";
import NavBarStudent from "./NavBarStudent";

function StudentViewTrainers() {
  const [trainers, setTrainers] = useState([]);
  const fetchAll = () => {
    axios
      .get("http://localhost:8081/trainers/all")
      .then((resp) => setTrainers(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container" style={{marginTop:"7%"}}>

      <NavBarStudent/>
      <div className="mrginlistalltrainer" style={{fontSize:"30px"}}>
     
        <a class="previous">&laquo;</a>
        <Link
          to="/student/dashboard"
          style={{ color: "chocolate" }}
          className="previous round"
        >
          Back
        </Link>
      </div>
      <h4
        style={{
          color: "red",
          backgroundColor: "powderblue",
          fontSize: "30px",
        }}
        className="text-center"
      >
        List All Trainers
      </h4>
      <hr />

      <table className="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th>TrainerId</th>
            <th>Firstname</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((t, index) => (
            <tr class="table-info" key={index}>
              <td>{t.trainerId}</td>
              <td>{t.firstName}</td>

              <td>{t.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentViewTrainers;
