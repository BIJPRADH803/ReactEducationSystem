import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
//import { baseUrl } from "../util/AppConstants";
// import "../css/ListAllTrainer.css";

function ListAllCourse() {
  const [course, setCourse] = useState([]);


  const fetchAll = () => {
    axios
      .get(
        "http://localhost:8081/edu/course/courses"
      )
      .then((resp) => setCourse(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container"  style={{marginTop:"7%"}}>
        <NavBarAdmin/>

       <div   style={{fontSize:"30px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link  style={{color:"chocolate"}} to="/admin/dashboard" className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">List All Course</h4>
      <hr />
      
      <Link to = "/course/save" className = "btn btn-primary mb-2" > Add Course </Link>
      <table  className="table table-bordered table-striped">
        <thead  class="thead-dark">
          <tr>
            <th>CourseId</th>
            <th>CourseName</th>
            <th>CourseAmount</th>
            <th>hours</th>
            <th>View</th>
            <th>Edit/Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {course.map((t, index) => (
            <tr  class="table-info" key={index+1}>
              <td>{t.courseId}</td>
              <td>{t.courseName}</td> 
              <td>{t.courseAmount}</td>
              <td>{t.hours}</td>
              <td>
                <Link to={`/course/view/${t.courseId}`}   className = "btn btn-primary mb-2" >View</Link>
              </td>
              <td>
                <Link to={`/course/edit/${t.courseId}`}  className = "btn btn-primary mb-2" >Update</Link>
              </td>
              <td>
                <Link to={`/course/delete/${t.courseId}`}  className = "btn btn-primary mb-2" >Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
export default ListAllCourse;