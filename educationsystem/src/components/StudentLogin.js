import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { baseUrl } from '../util/AppConstants';
import NavBarHome from './NavBarHome';

function StudentLogin() {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        //validation login form
        let errors = {};
        if (!loginForm.username) {
            errors["usernameErr"] = "Username is required"
        }
        if (!loginForm.password) {
            errors["passwordErr"] = "Password is required"
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        // if no errors call the login api
        if (noErrors) {
           
            let payload = {
                username: loginForm.username,
                password: loginForm.password
            }

            //http://localhost:8081/api/student-login?password=biju123&username=Bkumar
            axios
            .post(
                baseUrl+"/api/student-login?password=" +
                loginForm.password +
                "&username=" +
                loginForm.username, payload).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.firstName);
//...............................................................................
                //local storage to show our details
                let user={

                    studentId:resp.data.studentId,
                    firstName: resp.data.firstName
                }
                localStorage.setItem("myUser",JSON.stringify(user));
//................................................................................

                navigate("/student/dashboard");
            }).catch(error => {
                console.log(error.response);
                alert("login failed");
            })
        }
        event.preventDefault();
    }
    return (
        <div class="row h-100 justify-content-center align-items-center"  style={{  marginTop: "75px" }}>

            <NavBarHome/>
            <div className="mrginlistalltrainer" style={{fontSize:"30Px",marginLeft:"40px"}}> <a class="previous">&laquo;</a> 
             <Link to="/"  style={{color:"chocolate"}} className="previous round">Back</Link> </div>
            
            <div className='col-10 col-md-8 col-lg-6'style={{  marginTop: "70px" }}>
                <h1><b><u>User Panel</u></b></h1>
            
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username" className="form-control" value={loginForm.username} onChange={handleChange} />
                    {
                        formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" className="form-control" value={loginForm.password} onChange={handleChange} />
                    {
                        formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                    }
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                </div>

                <div className="col">
              <div className="div-text">
              {/* <Link to="/registration/form" style={{ textDecoration: "none" }}> */}
              
                <Link to="/student/registration" style={{ textDecoration: "none" }}>
                  <h5
                    style={{ textAlign: "center",color:"black" , marginRight: "0px" }}
                    className="new-user">
                    Sign up For New User !!
                  </h5>
                </Link>
              </div>
            </div>
            </div>
        </div>
    )
}
export default StudentLogin;