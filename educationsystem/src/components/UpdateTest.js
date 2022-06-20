import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import NavBarAdmin from './NavBarAdmin';
import { Link } from 'react-router-dom';


// import { baseUrl } from '../util/AppConstants';
function UpdateTest() {
    
    const [test, setTest] = useState({
        testId: "",
        testName: "",
        totalMarks: "",
       noOfQuestions: "",
       testDate: "",
       hours:""
    });
    const { id } = useParams();  
   
    const navigate = useNavigate();
    const fetchTestById = () => {
        axios.get("http://localhost:8081/api/test/get/"+id)
        .then(resp => setTest(resp.data))
    }
    useEffect(fetchTestById, []);
    const handleChange = (event) => {
        setTest(test => ({ ...test, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        const palyload = {
            testId: test.testId,
            testName: test.testName,
            totalMarks: test.totalMarks,
            noOfQuestions:test.noOfQuestions,
            hours:test.hours,
            testDate:test.testDate,

            
        }
        axios.put("http://localhost:8081/api/test/update", palyload)
            .then(resp => alert("test id: " +resp.data.testId +" updated successfully........"));
        navigate(-1);
    }
    return (
        <div  style={{marginTop:"7%"}}>

            <NavBarAdmin/>

            <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllTest"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>

                <h2 style={{color:"green"}}><u>Details</u></h2>
            <div>
                <label>Test ID:</label>
                <input type="number" name="testId" value={test.testId} onChange={handleChange} disabled />
            </div>
            <div>
                <label>Test Name:</label>
                <input type="text" name="testName" value={test.testName} onChange={handleChange} />
            </div>
           
            <div>
                <label>Total Marks:</label>
                <input type="number" name="totalMarks" value={test.totalMarks} onChange={handleChange} />
            </div>
            <div>
                <label>No Of Questions:</label>
                <input type="number" name="noOfQuestions" value={test.noOfQuestions} onChange={handleChange} />
            </div>
            <div>
                <label>Hours:</label>
                <input type="number" name="hours" value={test.hours} onChange={handleChange} />
            </div>
            <div>
                <label>Test Date:</label>
                <input type="date" name="testDate" value={test.testDate} onChange={handleChange} />
            </div>
            <div>
                <button className = "btn btn-primary mb-2" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default  UpdateTest;