import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from "react-router";
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
import { Link } from 'react-router-dom';
function  DeleteCourse() {
    const[course, setCourse] = useState(null)
    const { id } = useParams();
    const navigate=useNavigate();
    const fetchCourseById = () => {

       

        axios.get(baseUrl+"/edu/course/courses/" + id).
        then(resp => setCourse(resp.data))
    }
    useEffect(fetchCourseById, []);
    const DeleteCourse = () => {
        axios.delete(baseUrl+ "/edu/course/delete/"+id).
        then(resp => alert("course id:"+resp.data.CourseId +" is deleted successfully........"));
        navigate(-1);
    }
    return (
        <div  style={{marginTop:"7%"}}>

            <NavBarAdmin/>
            <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllCourse"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
            <h2  style={{color:"green"}}><u>Course Details</u></h2>
            {
                course !== null &&
                <div>
                    <p>CourseId: {course.courseId}</p>
                    <p> Course Name: {course.courseName}</p>
                    <p> Course Amount: {course.courseAmount}</p>
                    <p> Hours: {course.hours}</p>
                </div>
            }
            <div><button className = "btn btn-primary mb-2" onClick={DeleteCourse}>Delete</button></div>
        </div>
    )
}
export default DeleteCourse;