import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router';
// const navigate = useNavigate();
// navigate(-1);
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
function UpdateTrainer() {
    const [trainer, setTrainer] = useState({
      trainerId: "",
        firstName: "",
         lastName: "",
        
    });
    const { id } = useParams();  
   
    const navigate = useNavigate();
    const fetchTrainerById = () => {
        axios.get(baseUrl+"/trainers/get/"+id)
        .then(resp => setTrainer(resp.data))
    }
    useEffect(fetchTrainerById, []);
    const handleChange = (event) => {
        setTrainer(trainer => ({ ...trainer, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        const palyload = {
            trainerId: trainer.trainerId,
            firstName: trainer.  firstName,
            lastName:trainer.lastName
            
        }
        axios.put(baseUrl+"/trainers/update", palyload)
            .then(resp => alert("trainer id: " +resp.data.trainerId +" updated successfully........"));
        navigate(-1);
    }
    return (
        <div  style={{marginTop: "8%"}}>
            <NavBarAdmin/>

            
      <div style={{marginLeft:"60px"}}className="mrginlistallstdnts"> <a class="previous">&laquo;</a> 
      <Link   to="/getAllTrainers" style={{color:"yellow"}} className="previous round">Back</Link> </div>
          <h2><u>Details</u></h2>
            <div>
                <label>Trainer ID:</label>
                <input type="text" name="trainerId" value={trainer.trainerId} disabled />
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={trainer.firstName} onChange={handleChange} />
            </div>
           
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={trainer.lastName} onChange={handleChange} />
            </div>
            <div>
                <button style={{marginLeft: "85px"}} className = "btn btn-primary mb-2" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default  UpdateTrainer;