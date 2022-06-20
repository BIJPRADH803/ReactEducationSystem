import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";

import NavBarAdmin from "./NavBarAdmin";
// import { useNavigate } from "react-router";

function ViewTrainer() {
//   const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const { id } = useParams();
  const fetchTrainerById = () => {
    axios
      .get(baseUrl + "/trainers/get/" + id)
      .then((resp) => setTrainer(resp.data));
    // navigate(-1);
  };
  useEffect(fetchTrainerById, []);

  return (
    <div  style={{marginTop:"8%"}}>

        <NavBarAdmin/>
      <h2  style={{color:"green"}}><u>Trainer By Id</u></h2>
      {trainer !== null && (
        <div>
          <p>Id: {trainer.trainerId}</p>
          <p>Firstname: {trainer.firstName}</p>
          <p>LastName: {trainer.lastName}</p>
        </div>
      )}
      <div>
        {" "}
        <a class="previous">&laquo;</a>
        <Link to="/getAllTrainers" className="previous round">
          Previous Page
        </Link>{" "}
      </div>
    </div>
  );
}

export default ViewTrainer;
