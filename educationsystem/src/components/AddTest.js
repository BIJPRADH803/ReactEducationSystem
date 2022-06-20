import React, { useState } from "react";
import axios from "axios";
// import { baseUrl } from "../util/AppConstants";
// import "../css/AddTest.css";
import { useNavigate } from 'react-router';

import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
function AddTest() {
   const navigate = useNavigate();
  const [test, setTest] = useState({
    testName: "",
    totalMarks: "",
    noOfQuestions: "",
    hours: "",
    testDate: ""

  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setTest((test) => ({
      ...test,
      [event.target.name]: event.target.value,
      
    }));
  };
  const handleSubmit = () => {
    //validate add trainer form
    let errors = {};

    if (!test.testName) {
      errors["testNameErr"] = "testName is required";
    }
    if (!test.totalMarks) {
      errors["totalMarksErr"] = "totalMarksis required";
    }
    if (!test.noOfQuestions) {
      errors["noOfQuestionsErr"] = "noOfQuestions mention  is required";
    }
    if (!test.hours) {
      errors["hoursErr"] = "pls mention hours  it is required";
    }
    if (!test.testDate) {
      errors["testDateErr"] = "date  is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        testName: test.testName,
        totalMarks: test.totalMarks,
        noOfQuestions: test.noOfQuestions,
        hours: test.hours,
        testDate: test.testDate,
      };

      axios
        .post("http://localhost:8081/api/test/save", payload)
        .then((resp) => alert("test is saved with id:" + resp.data.testId));
      navigate(-1);
    }
  };
  return (
    <div className="trainerbgpg" style={{marginTop:"6%"}}>

        <NavBarAdmin/>
        <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllTest"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
      <div>
        <label>Test Name</label>
        <input
          id="tname"
          className="form-control"
          type="text"
          name="testName"
          value={test.testName}
          onChange={handleChange}
        />
        {formErrors.testNameErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.testNameErr}
          </div>
        )}
      </div>
      <div>
        <label>Total Marks</label>
        <input
          id="tmarks"
          className="form-control"
          type="number"
          name="totalMarks"
          value={test.totalMarks}
          onChange={handleChange}
        />
        {formErrors.totalMarksErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.totalMarksErr}
          </div>
        )}
      </div>
      <div>
        <label>No Of Questions</label>
        <input
          id="tquestions"
          className="form-control"
          type="number"
          name="noOfQuestions"
          value={test.noOfQuestions}
          onChange={handleChange}
        />
        {formErrors.noOfQuestionsErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.noOfQuestionsErr}
          </div>
        )}
      </div>
      <div>
        <label>Hours</label>
        <input
          id="thours"
          className="form-control"
          type="number"
          name="hours"
          value={test.hours}
          onChange={handleChange}
        />
        {formErrors.hoursErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.hoursErr}
          </div>
        )}
      </div>
      <div>
        <label>Test Date</label>
        <input
          id="tdate"
          className="form-control"
          type="date"
          name="testDate"
          value={test.testDate}
          onChange={handleChange}
        />
        {formErrors.testDateErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.testDateErr}
          </div>
        )}
      </div>

      <div id="outer">
        <div class="inner1">
          <button className="btn btn-primary mb-2" onClick={handleSubmit}>
            Save
          </button>
        </div>
        <div class="inner2">
          <Link to="/listAll/test" className="btn btn-danger">
            {" "}
            Cancel{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AddTest;
