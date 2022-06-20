import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import { Link } from 'react-router-dom';

import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
function UpdateMessage() {
    const [message, setMessage] = useState({
      messageId: "",
        messageText: "",
         postedOn: "",
         subject:""
        
    });
    const { id } = useParams();  
   
    const navigate = useNavigate();
    const fetchMessageById = () => {
        axios.get(baseUrl+"/api/message/get/"+id)
        .then(resp => setMessage(resp.data))
    }
    useEffect(fetchMessageById, []);
    const handleChange = (event) => {
        setMessage(message => ({ ...message, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        const palyload = {
            messageId: message.messageId,
            messageText: message.messageText,
            postedOn: message.postedOn,
            subject: message.subject
            
            
        }
        axios.put(baseUrl+"/api/message/update", palyload)
            .then(resp => alert("message id: " +resp.data.messageId +" updated successfully........"));
        navigate(-1);
    }
    return (
        <div style={{marginTop:"7%"}}>
            <NavBarAdmin/>
      <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/viewAll/messages"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
            <div>
                <label>Message ID:</label>
                <input type="number" name="messageId" value={message.messageId} disabled />
            </div>
            <div>
                <label>Meesage Text:</label>
                <input type="text" name="messageText" value={message.messageText} onChange={handleChange} />
            </div>
           
            <div>
                <label>Posted On:</label>
                <input type="date" name="postedOn" value={message.postedOn} onChange={handleChange} />
            </div>
            
            <div>
                <label>Subject:</label>
                <input type="text" name="subject" value={message.subject} onChange={handleChange} />
            </div>
            <div>
                <button className = "btn btn-primary mb-2" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default   UpdateMessage;