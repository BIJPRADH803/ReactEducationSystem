import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";
import NavBarStudent from "./NavBarStudent";
// import "../css/ViewAllMessages.css";
export default function StudentViewTest() {
  const [test, setTest] = useState([]);

  const fetchAll = () => {
    axios.get(baseUrl + "/api/test/all").then((resp) => setTest(resp.data));
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
        {" "}
        LIST OF TEST
      </h4>
      <hr />

      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>TestId</th>
            <th>Testname</th>
            <th>TotalMarks</th>
            <th>No Of Questions</th>
            <th>Hours</th>
            <th>Test Date</th>
          </tr>
        </thead>

        <tbody>
          {test.map((t, index) => (
            <tr key={index + 1}>
              {/* <td>{index+1}</td> */}
              <td>{t.testId}</td>
              <td>{t.testName}</td>

              <td>{t.totalMarks}</td>
              <td>{t.noOfQuestions}</td>
              <td>{t.hours}</td>
              <td>{t.testDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
