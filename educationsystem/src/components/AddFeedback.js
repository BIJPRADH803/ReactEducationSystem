import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavBarStudent from "./NavBarStudent";

// import { useNavigate } from 'react-router';
// const navigate = useNavigate();
// navigate(-1);

function AddFeedback() {
  const [feedback, setFeedback] = useState({
    id: "",
    feedback: "",
    reply: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFeedback((feedback) => ({
      ...feedback,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    const palyload = {
      id: feedback.id,
      feedback: feedback.feedback,
      reply: feedback.reply,
    };
    axios
      .post("http://localhost:8081/api/edu/feedback/save", palyload)
      .then((resp) => alert("feedback is saved with id:" + resp.data.id));
    navigate(-1);
  };
  return (
    <div  style={{marginTop:"10%"}}>
      
      <NavBarStudent/>
         <div className="mrginlistalltrainer" style={{fontSize:"30px"}}> <a class="previous">&laquo;</a> 
      <Link to="/student/dashboard"  style={{color:"chocolate"}} className="previous round">Back</Link> </div>
      <div>
        <label>ID :</label>
        <input
          type="number"
          name="id"
          value={feedback.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <input
          type="text"
          name="feedback"
          value={feedback.feedback}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Reply :</label>
        <input
          type="text"
          name="reply"
          value={feedback.reply}
          onChange={handleChange}
        />
      </div>
      <div>
        <button style={{backgroundColor:"black", color:"red"}} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
export default AddFeedback;
