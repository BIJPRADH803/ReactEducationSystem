import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { baseUrl } from "../util/AppConstants";
import "../css/ListAllTrainer.css";
import "../css/ViewAllStudents.css";
import NavBarAdmin from "./NavBarAdmin";
function ViewAllStudents() {
  const [students, setStudents] = useState([]);
  const fetchAll = () => {
    axios
      .get("http://localhost:8081/api/all")
      .then((resp) => setStudents(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container">
      <NavBarAdmin />
      <br /> <br /> <br /> <br />
      <div style={{ fontSize: "30px" }} className="mrginlistallstdnts">
        {" "}
        <a class="previous">&laquo;</a>
        <Link
          to="/admin/dashboard"
          style={{ color: "chocolate" }}
          className="previous round"
        >
          Back
        </Link>{" "}
      </div>
      <h4
        style={{
          color: "red",
          backgroundColor: "powderblue",
          fontSize: "30px",
        }}
        className="text-center"
      >
        List All Students
      </h4>
      <hr />
      <table className="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th>StudentId</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>Email Id</th>
            <th>Contact Number</th>
            <th>User Name </th>

            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr class="table-info" key={index}>
              <td>{s.studentId}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.emailId}</td>
              <td>{s.contactNumber}</td>
              <td>{s.userName}</td>

              <td>
                <Link
                  to={`/view/student/${s.studentId}`}
                  className="btn btn-primary mb-2"
                >
                  View
                </Link>
              </td>

              <td>
                <Link
                  to={`/delete/student/${s.studentId}`}
                  className="btn btn-primary mb-2"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewAllStudents;
