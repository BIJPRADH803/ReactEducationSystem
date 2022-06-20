import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { useParams } from 'react-router-dom';
//import { baseUrl } from '../util/AppConstants';
import avatar from "../images/avatar.svg";
import "../css/singlestudent.css";
// import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import NavBarAdmin from './NavBarAdmin';


function ViewSingleStudent(){
    // const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const{ id } = useParams();
    const fetchStudentById = () => {
        axios.get("http://localhost:8081/api/get/"+ id).
        then(resp => setStudent(resp.data))
        // navigate(-1);

    }
    useEffect(fetchStudentById, []);

    return(
        <div style={{marginTop:"8%"}}>
            {/* <NavBarAdmin/> */}
            <div className="mrginlistallstdnts" style={{fontSize:"30px"}}> <a class="previous">&laquo;</a> 
      <Link to="/getAllStudents" style={{color:"chocolate"}} className="previous round">Back</Link> </div>
             <h1 style={{ textAlign: "center", marginTop: "10px" }}><u>Student</u> </h1>
             <div class="card-view" style={{ marginTop: "20px" }}>
             <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
                 <div class="container-student" style={{ textAlign: "center" }}>

           
                {
                    student !== null &&
                    <div>
              
                       <p>Student Id:{student.studentId} </p>
                        <p>User Name : {student.userName}</p>
                      
                        <p>Email Id: {student.emailId}</p>
                        <p>Contact Number:{student.contactNumber}</p>
                         </div>
                        }
             </div>
             </div>
        </div>
    )
}
export default ViewSingleStudent;