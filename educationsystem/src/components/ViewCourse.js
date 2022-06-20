import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";
import NavBarAdmin from "./NavBarAdmin";
function ViewCourse() {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  const fetchCourseById = () => {
    axios
      .get(baseUrl + "/edu/course/courses/" + id)
      .then((resp) => setCourse(resp.data));
  };
  useEffect(fetchCourseById, []);

  return (
    <div>
      <div  style={{marginTop:"7%",fontSize:"20px"}}>
          <NavBarAdmin/>
    
        <a  class="previous">&laquo;</a>
        <Link
          style={{ color: "chocolate", marginRight: "80%" }}
          to="/getAllCourse"
          className="previous round"
        >
          <u>Back</u>
        </Link>
      </div>
      <h2 style={{color:"green"}}><u>Course By Id</u></h2>
      {course !== null && (
        <div>
          <p>Id: {course.courseId}</p>
          <p>Coursename: {course.courseName}</p>
          <p>CourseAmount: {course.courseAmount}</p>
          <p>Hours: {course.hours}</p>
        </div>
      )}
    </div>
  );
}

export default ViewCourse;
