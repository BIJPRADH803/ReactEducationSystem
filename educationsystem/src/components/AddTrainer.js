import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../util/AppConstants";
import "../css/AddTrainer.css";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
function AddTrainer() {
  const [trainer, setTrainer] = useState({
    firstName: "",
    
    lastName: "",
  });
   
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setTrainer((trainer) => ({
    ...trainer,
      [event.target.name]: event.target.value,
      //[event.target.name]: event.target.type === 'String' ? parseInt(event.target.value) : event.target.value,
    }));
  };
  const handleSubmit = () => {
    //validate add trainer form
    let errors = {};
    if (!trainer.firstName) {
      errors["firstNameErr"] = "firstName is required";
    }
    
    if (!trainer.lastName) {
      errors["lastNameErr"] = "lastName is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        firstName: trainer.firstName,
        lastName: trainer.lastName,
      };
      axios
        .post(
          baseUrl+"/trainers/save",
          payload
        )
        .then((resp) =>
          alert("trainer is saved with id:" + resp.data.trainerId)
        );
        navigate(-1);
    }
  };
  return (
    <div  className="trainerbgpg" style={{marginTop:"7%"}}>
      <NavBarAdmin/>

<div className="mrginlistalltrainer" style={{fontsize:"20px"}}> <a class="previous">&laquo;</a> 
<Link to="/getAllTrainers"  style={{color:"chocolte"}} className="previous round">Back</Link> </div>
      <div  className="addingtrainerpage">
        <label>First Name</label>
        <input
        id="fname"
         className="form-control"
          type="text"
          name="firstName"
          value={trainer.firstName}
          onChange={handleChange}
        />
        {formErrors.firstNameErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.firstNameErr}
          </div>
        )}
      </div>
     
      <div>
        <label>Last Name</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="lastName"
          value={trainer.lastName}
          onChange={handleChange}
        />
         {formErrors.lastNameErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.lastNameErr}
          </div>
        )}
      </div>

      <div id="outer" >
        <div  class="inner1"><button className = "btn btn-primary mb-2"  onClick={handleSubmit}>Save</button></div>
        <div class="inner2"><Link to="/getAllTrainers" className="btn btn-danger"> Cancel </Link></div>
      </div>
    </div>
  );
}
export default AddTrainer;
