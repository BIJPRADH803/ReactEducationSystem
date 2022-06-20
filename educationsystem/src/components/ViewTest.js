import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBarAdmin from "./NavBarAdmin";
// import { baseUrl } from '../util/AppConstants';
// import { useNavigate } from 'react-router';
function ViewTest() {
  // const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const { id } = useParams();
  
  const fetchTestById = () => {
    axios
      .get("http://localhost:8081/api/test/get/" + id)
      .then((resp) => setTest(resp.data));
  };
  useEffect(fetchTestById, []);
//   navigate(-1);

  return (
    <div  style={{marginTop:"8%"}}>

        <NavBarAdmin/>
      <h2 style={{color:"green"}}><u>Test By Id</u></h2>
      {test !== null && (
        <div>
          <p>Test Id: {test.testId}</p>
          <p>Test name: {test.testName}</p>
          <p>Total Marks: {test.totalMarks}</p>
          <p>No Of Questions: {test.noOfQuestions}</p>
          <p>Hours: {test.hours}</p>
          <p>Test Date: {test.testDate}</p>
        </div>
      )}
      <div>
        {" "}
        <a class="previous">&laquo;</a>
        <Link  style ={{color:"chocolate"}}to="/getAllTest" className="previous round">
          Previous Page
        </Link>
      </div>
    </div>
  );
}

export default ViewTest;
