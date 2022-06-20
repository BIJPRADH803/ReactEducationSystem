import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { baseUrl } from '../util/AppConstants';
import NavBarHome from './NavBarHome';
import { Link } from 'react-router-dom';

function AdminLogin() {
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

        
            //http://localhost:8081/edu/admin/login?password=admin123&username=Admin
            axios
            .post(
              baseUrl +"/edu/admin/login?password="+loginForm.password+"&username="+loginForm.username, 
              payload).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.userName);

                //..............................
                //local storage for admin details 
                let admin={

                  adminId:resp.data.adminId,
                  userName: resp.data. userName
                }
               localStorage.setItem("myUser",JSON.stringify( admin));

              
                //...........................
                navigate("/admin/dashboard");
            }).catch(error => {
                console.log(error.response);
                alert("login failed");
            })
        }
        event.preventDefault();
    }
    return (
        <div class="row h-100 justify-content-center align-items-center" style={{  marginTop: "30px" }}>
            <NavBarHome/>
            <div className="mrginlistalltrainer" style={{fontSize:"30Px",marginLeft:"40px", marginTop: "40px"}}> <a class="previous">&laquo;</a> 
             <Link to="/"  style={{color:"chocolate"}} className="previous round">Back</Link> </div>
            <div className='col-10 col-md-8 col-lg-6'style={{  marginTop: "60px" }}>

                <h1 ><u>Admin Panel</u></h1>
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
            </div>
        </div>
    )
}
export default AdminLogin;