import React, { useState } from "react";
import "../css/style.css";
import Header from "./Header";
import axios from "axios";
import { baseUrl } from "../util/AppConstants";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setStudent((student) => ({
      ...student,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    //validate add student form
    let errors = {};
    // const isValid=isValid();
    if (!student.firstName) {
      errors["firstNameErr"] = "firstName is required";
    }
    if (typeof student.firstName !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(student.firstName)) {
        errors["firstNameErr"] =
          "Please type only character not number or special character";
      }
    }

    if (!student.lastName) {
      errors["lastNameErr"] = "lastName is required";
    }

    if (typeof student.lastName !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(student.lastName)) {
        errors["lastNameErr"] =
          "Please type only character not number or special character";
      }
    }

    if (!student.emailId) {
      errors["emailIdErr"] = "emailId is required";
    }

    if (!student.emailId) {
      errors["emailIdErr"] = "Please enter your email Address.";
    }

    if (typeof student.emailId !== "undefined") {
      var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(student.emailId)) {
        errors["emailIdErr"] = "Please enter valid email address.";
      }
    }

    if (!student.contactNumber) {
      errors["contactNumberErr"] = "contactNumber is required";
    }
    if (typeof student.contactNumber !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(student.contactNumber)) {
        // isValid = false;
        errors["contactNumberErr"] = "Please enter only number.";
      } else if (student.contactNumber.length != 10) {
        // isValid = false;
        errors["contactNumberErr"] = "Please enter valid phone number.";
      }
    }

    if (!student.userName) {
      errors["userNameErr"] = "userName is required";
    }
    if (!student.password) {
      errors["passwordErr"] = "password is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        firstName: student.firstName,
        lastName: student.lastName,
        emailId: student.emailId,
        contactNumber: student.contactNumber,
        userName: student.userName,
        password: student.password,
      };
      axios
        .post(baseUrl + "/api/save", payload)
        .then((resp) =>
          alert("student is saved with id:" + resp.data.studentId)
        );
      navigate(-1);
    }
  };

  return (
    <div className="form" style={{marginTop:"7%"}}>

         
     <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/student/login"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
    
       
      <div className="form-body">
        <Header />
        <div className="username">
          <label className="form__label" for="firstName">
            First Name
          </label>
          <input
            className="form__input"
            id="fname"
            // className="form-control"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={student.firstName}
            onChange={handleChange}
          />
          {formErrors.firstNameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.firstNameErr}
            </div>
          )}
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name
          </label>
          <input
            id="lname"
            className="form__input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={student.lastName}
            onChange={handleChange}
          />
          {formErrors.lastNameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.lastNameErr}
            </div>
          )}
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email ID
          </label>
          <input
            id="emailid"
            className="form__input"
            type="email"
            name="emailId"
            placeholder="Email Id"
            value={student.emailId}
            onChange={handleChange}
          />
          {formErrors.emailIdErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.emailIdErr}
            </div>
          )}
        </div>
        <div className="contact">
          <label className="form__label" for="contact">
            Contact
          </label>
          <input
            id="contactnumber"
            className="form__input"
            type="number"
            name="contactNumber"
            placeholder="Mobile Number"
            value={student.contactNumber}
            onChange={handleChange}
          />
          {formErrors.contactNumberErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.contactNumberErr}
            </div>
          )}
        </div>
        <div className="username">
          <label className="form__label" for="userName">
            User Name
          </label>
          <input
            id="username"
            className="form__input"
            type="text"
            name="userName"
            placeholder="User Name"
            value={student.userName}
            onChange={handleChange}
          />
          {formErrors.userNameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.userNameErr}
            </div>
          )}
        </div>

        <div className="password">
          <label className="form__label" for="password">
            Password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            name="password"
            placeholder="PassWord"
            value={student.password}
            onChange={handleChange}
          />
          {formErrors.passwordErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.passwordErr}
            </div>
          )}
        </div>
      </div>
      <div class="footer">
        <button
          type="submit"
          class="btn"
          style={{ backgroundColor: "blue" }}
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;
