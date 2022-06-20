import React, { useState } from 'react';
import axios from 'axios';
//import { baseUrl } from '../util/AppConstants';
import { useNavigate } from 'react-router';
import "../css/AddMessage.css";
import NavBarAdmin from './NavBarAdmin';
import { Link } from 'react-router-dom';
function AddMessage() {
    const [message,setMessage] = useState({
      
        subject :"",
        messageText:"",
        postedOn: ""
   
    })
    const navigate = useNavigate();
    const handleChange = (event) => {
        setMessage( message => ({...message ,[event.target.name] : event.target.value}));
    }
    const handleSubmit = () => {
        const payload = {          
           
            messageText :message.messageText,
            postedOn:message.postedOn,
            subject :message.subject
           
           
            
        }
        axios.post("http://localhost:8081/api/message/save", payload)
        .then(resp=>alert("message is saved with id:"+resp.data.messageId));
        navigate(-1);
    }
    return (
        <div   style={{marginTop:"7%"}}>
            <NavBarAdmin/>
      <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/viewAll/messages"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
      <h2 style={{color:"green"}}><u>Details</u></h2>
            <div>
                <label>Message Text:</label>
                <input type="text" name="messageText" value={message.messageText} onChange={handleChange} />
            </div>
            <div>
                <label>Posted On :</label>
                <input type="date" name="postedOn" value={message.postedOn} onChange={handleChange} />
            </div>
            
            <div>
                <label>Subject :</label>
                <input type="text" name="subject" value={message.subject} onChange={handleChange} />
            </div>
            
            <div  className="savebutton">
                <button   onClick={handleSubmit}  style={{width:"100%"}}>Save</button>
            </div>
        </div>
    )
}
export default AddMessage;