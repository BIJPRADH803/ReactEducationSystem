import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import NavBarAdmin from './NavBarAdmin';
 import { useNavigate } from 'react-router';
 import { Link } from 'react-router-dom';


function  DeleteTest() {
     const navigate = useNavigate();
    const[test, setTest] = useState(null)
    const { id } = useParams();
    const fetchTestById = () => {

       

        axios.get("http://localhost:8081/api/test/get/" + id).
        then(resp => setTest(resp.data))
    }
    useEffect(fetchTestById, []);
    const deleteTest = () => {
        axios.delete("http://localhost:8081/api/test/delete/"+id).
        then(resp => alert("test id:"+resp.data.testId +" is deleted successfully........"));
        navigate(-1);
    }
    return (
        <div style={{marginTop:"7%"}}>
            <NavBarAdmin/>


            <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllTest"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
            <h2 style={{ color:"green"}}><u>Test Details</u></h2>
            {
                test !== null &&
                <div>
                    <p>TestId: {test.testId}</p>
                    <p> Test Name: {test.testName}</p>
                    <p> Total Marks: {test.totalMarks}</p>
                    <p> No Of Questions: {test.noOfQuestions}</p>
                    <p> Hours: {test.hours}</p>
                    <p> Test Date: {test.testDate}</p>
                </div>
            }
            <div><button className = "btn btn-primary mb-2" onClick={deleteTest}>Delete</button></div>
        </div>
    )
}
export default DeleteTest;