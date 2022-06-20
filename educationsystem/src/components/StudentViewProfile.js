import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { baseUrl } from '../util/AppConstants';
import avatar from "../images/avatar.svg";
import "../css/singlestudent.css";

import { Link } from "react-router-dom";

function StudentViewProfile() {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const fetchStudentById = () => {
    axios
      .get("http://localhost:8081/api/get/" + id)
      .then((resp) => setStudent(resp.data));
  };
  useEffect(fetchStudentById, []);

  return (
    <div>
   
      <h1 style={{ textAlign: "center", marginTop: "75px" }}>Student </h1>
      <div class="card-view" style={{ marginTop: "50px" }}>
        <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
        <div class="container-student" style={{ textAlign: "center" }}>
          {student !== null && (
            <div>
              <p>Student Id:{student.studentId} </p>
              <p>User Name : {student.userName}</p>

              <p>Email Id: {student.emailId}</p>
              <p>Contact Number:{student.contactNumber}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default StudentViewProfile;
