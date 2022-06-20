import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";
import NavBarStudent from "./NavBarStudent";
export default function StudentViewMaterial() {
  const [student, setStudent] = useState([]);

  const fetchAll = () => {
    axios.get(baseUrl + "/api/study/all").then((resp) => setStudent(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container-fluid" style={{marginTop:"7%"}}>
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
        MATERIAL LIST
      </h4>
      <hr />

      {/* <Link to = "/add/message" className = "btn btn-primary mb-2" > Add Message </Link> */}
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>MaterialId</th>
            <th>MaterialType</th>
            <th>DownloadLink</th>
          </tr>
        </thead>

        <tbody>
          {student.map((m, index) => (
            <tr key={index + 1}>
              {/* <td>{index+1}</td> */}
              <td>{m.materialId} </td>
              <td>{m.materialType}</td>
              <td>{m.downloadLink}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
