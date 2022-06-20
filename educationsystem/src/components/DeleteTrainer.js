import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router';
// const navigate = useNavigate();
// navigate(-1);
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
function  DeleteTrainer() {
    const navigate = useNavigate();
    const[trainer, setTrainer] = useState(null)
    const { id } = useParams();
    const fetchTrainerById = () => {

       

        axios.get(baseUrl+"/trainers/get/" + id).
        then(resp => setTrainer(resp.data))
    }
    useEffect(fetchTrainerById, []);
    const deleteTrainer = () => {
        axios.delete(baseUrl+"/trainers/delete/"+id).
        then(resp => alert("trainer id:"+resp.data.trainerId +" is deleted successfully........"));
        navigate(-1);
    }
    return (
        <div style={{marginTop:"7%"}}>

<NavBarAdmin/>


              <div className="mrginlistallstdnts"  style={{fontSize:"20px"}}> <a class="previous">&laquo;</a> 
      <Link to="/getAllTrainers" style={{color:"chocolate"}} className="previous round">Back</Link> </div>
            <h2>Trainer Details</h2>
            {
                trainer !== null &&
                <div>
                    <p>TrainerId: {trainer.trainerId}</p>
                    <p> First Name: {trainer.firstName}</p>
                   
                    <p> Last Name: {trainer.lastName}</p>
                </div>
            }
            <div><button className = "btn btn-primary mb-2" onClick={deleteTrainer}>Delete</button></div>
        </div>
    )
}
export default DeleteTrainer;