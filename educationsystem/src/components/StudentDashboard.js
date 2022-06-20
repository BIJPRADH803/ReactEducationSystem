import React from 'react'
import { useNavigate } from 'react-router';
import NavBarStudent from './NavBarStudent';

export default function StudentDashboard() {

    const myUser =JSON.parse(localStorage.getItem("myUser"));
    const navigate = useNavigate();

    const logoutButton =()=>{
        if(myUser != null){
            localStorage.removeItem("myUser");
            localStorage.clear();
            alert("You have successfully logot.........");
            navigate("/")
        }
    }
  return (
    <div>
      <NavBarStudent/>
      <br/><br/><br/><br/>
        <h1>STUDENT DASHBOARD</h1>
        <h2>Welcome {myUser.firstName}</h2>
        
        

        <button onClick={logoutButton}>Logout</button>
    </div>
  )
}
