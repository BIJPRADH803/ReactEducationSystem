import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router';
// const navigate = useNavigate();
// navigate(-1);
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
function  DeleteStudent() {
    const navigate = useNavigate();
    const[student, setStudent] = useState(null)
    const { id } = useParams();
    const fetchStudentById = () => {

       

        axios.get(baseUrl+"/api/get/" + id).
        then(resp => setStudent(resp.data))
    }
    useEffect(fetchStudentById, []);
    const deleteStudent = () => {
        axios.delete(baseUrl+"/api/delete/"+id).
        then(resp => alert("student id:"+resp.data.studentId+" is deleted successfully........"));
        navigate(-1);
    }
    return (
        
        <div  style={{marginTop:"7%"}}>
  <NavBarAdmin/>
      <div className="mrginlistallstdnts" style={{fontSize:"25px"}}> <a class="previous">&laquo;</a> 
      <Link to="/getAllStudents" style={{color:"chocolate"}} className="previous round">Back</Link> </div>
            <h2  style={{color:"green"}}> <u>Student Details</u></h2>
            {
               student !== null &&
                <div>
                    <p>StudentID: {student.studentId}</p>
                     <p>User Name : {student.userName}</p>
                     <p> First Name: {student.firstName}</p>
                     <p> Last Name: {student.lastName}</p>
                     <p>Email Id: {student.emailId}</p>
                    <p>Contact Number:{student.contactNumber}</p>
                     
                </div>
            }
            <div><button className = "btn btn-primary mb-2" onClick={ deleteStudent}>Delete</button></div>
        </div>
    )
}
export default  DeleteStudent;