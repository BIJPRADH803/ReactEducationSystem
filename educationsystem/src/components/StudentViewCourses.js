import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { baseUrl } from '../util/AppConstants';
import NavBarStudent from './NavBarStudent';
// import "../css/ViewAllMessages.css";
export default function StudentViewCourse(){
    const [course, setCourse] = useState([]);

    const fetchAll = () => {
        axios.get(baseUrl+"/edu/course/courses ").
        then(resp=> setCourse(resp.data))

    }
    useEffect(fetchAll,[]);

    return(
       
       
        <div className='container-fluid' style={{marginTop:"7%"}}>

            <NavBarStudent/>
             <div  style={{fontSize:"30px"}}className="mrginprvmsg"> <a class="previous">&laquo;</a> 
      <Link to="/student/dashboard" style={{ color: "chocolate"}}className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">COURSE LIST</h4>
      <hr />
      
      {/* <Link to = "/add/message" className = "btn btn-primary mb-2" > Add Message </Link> */}
                        <table class ="table table-bordered">
                    <thead  class="thead-dark">
                        <tr>
                            <th>CourseId</th>
                            <th>CourseName</th>
                            <th>CourseAmount</th>
                            <th>Hours</th>
                             <th>Actions</th>
                            {/* <th colSpan={3}>Actions</th> */}
                        </tr>
                    </thead>
               
                <tbody>
                {
                course.map((m, index) =>
                <tr key={index+1}>
                    {/* <td>{index+1}</td> */}
                    <td>{m.courseId} </td>
                    <td>{m.courseName}</td>
                    <td>{m.courseAmount}</td>
                    <td>{m.hours}</td>
                    {/* <td>
                <Link to={`/view/message/${m.messageId}`}  className = "btn btn-primary mb-2">View</Link>
              </td>
              <td>
                <Link to={`/update/message/${m.messageId}`}  className = "btn btn-primary mb-2">Update</Link>
              </td> */}
              <td>
                <Link to="/enroll/forpayment" 
                className = "btn btn-primary mb-2">Enroll</Link>
              </td>
              
                </tr>
                
                )
    }
    </tbody>
    </table>
            </div>
    )
}