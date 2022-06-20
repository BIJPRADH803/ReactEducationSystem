import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import { Link } from 'react-router-dom';
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
function UpdateCourse() {
    const [course, setCourse] = useState({
      courseId: "",
        courseName: "",
         courseAmount: "",
          hours:""
        
    });
    const { id } = useParams();  
   
    const navigate = useNavigate();
    const fetchCourseById = () => {
        axios.get(baseUrl+"/edu/course/courses/"+id)
        .then(resp => setCourse(resp.data))
    }
    useEffect(fetchCourseById, []);
    const handleChange = (event) => {
        setCourse(course => ({ ...course, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        const palyload = {
            courseId: course.courseId,
            courseName: course.  courseName,
            courseAmount:course.courseAmount,
            hours:course.hours
        }
        axios.put(baseUrl+"/edu/course/update", palyload)
            .then(resp => alert("course id: " +resp.data.courseId +" updated successfully........"));
        navigate(-1);
    }
    return (
        <div  style={{marginTop:"8%"}}>
            <NavBarAdmin/>
           
            <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllCourse"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
             <h2 style={{color:"green"}}><u>Details</u></h2>
            <div>
                <label>Course ID:</label>
                <input type="text" name="corseId" value={course.courseId} disabled />
            </div>
            <div>
                <label>Course Name:</label>
                <input type="text" name="corseName" value={course.courseName} onChange={handleChange} />
            </div>
           
            <div>
                <label>Course Amount:</label>
                <input type="text" name="courseAmount" value={course.courseAmount} onChange={handleChange} />
            </div>
            <div>
                <label>Hours:</label>
                <input type="text" name="hours" value={course.hours} onChange={handleChange} />
            </div>
            
            <div>
                <button className = "btn btn-primary mb-2" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default  UpdateCourse;