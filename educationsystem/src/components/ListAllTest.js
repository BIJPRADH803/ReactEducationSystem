import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
// import { useNavigate } from 'react-router';
//import { baseUrl } from "../util/AppConstants";
// import "../css/ListAllTest.css";

function ListAllTest() {
  // const navigate = useNavigate();
  const [test, setTest] = useState([]);

  // useEffect(() => {
  //    axios.get("http://localhost:9000/api/educationsystem/trainer/view-all-trainers")
  //    .then(resp => setTrainers(resp.data)) }, [])

  const fetchAll = () => {
    axios
      .get(
        "http://localhost:8081/api/test/all"
      )
      .then((resp) => setTest(resp.data));
  };
  // navigate(-1);
  useEffect(fetchAll, []);

  return (
    <div className="container" style={{marginTop:"7%"}}>
      <NavBarAdmin/>

       <div style={{fontSize:"30px"}} className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/admin/dashboard" style={{color:"chocolate"}} className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">List All Tests</h4>
      <hr />
      
      <Link to = "/add/test/" className = "btn btn-primary mb-2" > Add Test </Link>
      <table  className="table table-bordered table-striped">
        
        <thead  class="thead-dark">
          <tr>
            <th>TestId</th>
            <th>Testname</th>
            <th>TotalMarks</th>
            <th>No Of Questions</th>
            <th>Hours</th>
            <th>Test Date</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {test.map((t, index) => (
            <tr  class="table-info" key={index}>
              <td>{t.testId}</td>
              <td>{t.testName}</td>
              
              <td>{t.totalMarks}</td>
              <td>{t.noOfQuestions}</td>
              <td>{t.hours}</td>
              <td>{t.testDate}</td>

              <td>
                <Link to={`/view/test/${t.testId}`}   className = "btn btn-primary mb-2" >View</Link>
              </td>
              <td>
                <Link to={`/update/test/${t.testId}`} className = "btn btn-primary mb-2" >Update</Link>
              </td>
              <td>
                <Link to={`/delete/test/${t.testId}`}  className = "btn btn-primary mb-2" >Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
export default ListAllTest;