import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../util/AppConstants";
// import "../css/AddTrainer.css"

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
function AddCourse() {
  const [course, setCourse] = useState({
     
    courseName: "",
    courseAmount: "",
    hours:""
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setCourse((course) => ({
    ...course,
      [event.target.name]: event.target.value,
      //[event.target.name]: event.target.type === 'String' ? parseInt(event.target.value) : event.target.value,
    }));
  };
  const handleSubmit = () => {
    //validate add trainer form
    let errors = {};
    
    if (!course.courseName) {
      errors["courseNameErr"] = "courseName is required";
    }
    
    if (!course.courseAmount) {
      errors["courseAmountErr"] = "courseAmount is required";
    }
    if (!course.hours){
        errors["hoursErr"]="hours is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
          
        courseName: course.courseName,
        courseAmount: course.courseAmount,
        hours:course.hours,
      };
      axios
        .post(
          baseUrl+"/edu/course/add",
          payload
        )
        .then((resp) =>
          alert("course is saved with id:" + resp.data.courseId)
        );
        navigate(-1);
    }
  };
  return (
    <div  className="trainerbgpg" style={{marginTop:"6%"}}>
      <NavBarAdmin/>
      <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllCourse"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
     <div>
        <label>course Name</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
        />
         {formErrors.courseNameErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.courseNameErr}
          </div>
        )}
      </div>
      
      <div>
        <label>course Amount</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="courseAmount"
          value={course.courseAmount}
          onChange={handleChange}
        />
         {formErrors.courseAmountErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.courseAmountErr}
          </div>
        )}
      </div>
      <div>
        <label>Hours</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="hours"
          value={course.hours}
          onChange={handleChange}
        />
         {formErrors.courseAmountErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.hoursErr}
          </div>
        )}
      </div>

      <div id="outer" >
        <div  class="inner1"><button className = "btn btn-primary mb-2"  onClick={handleSubmit}>Save</button></div>
        <div class="inner2"><Link to="/getAllCourse" className="btn btn-danger"> Cancel </Link></div>
      </div>
    </div>
  );
}
export default AddCourse;