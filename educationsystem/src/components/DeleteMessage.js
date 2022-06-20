import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { baseUrl } from '../util/AppConstants';
 import { useNavigate } from 'react-router';
import NavBarAdmin from './NavBarAdmin';

function  DeleteMessage() {
    const navigate = useNavigate();
    const[message, setMessage] = useState(null)
    const { id } = useParams();
    const fetchMessageById = () => {

       

        axios.get(baseUrl+"/api/message/get/"+ id).
        then(resp => setMessage(resp.data))
    }
    useEffect(fetchMessageById, []);
    const deleteMessage = () => {
        axios.delete(baseUrl+"/api/message/delete/"+id).
        then(resp => alert("message id:"+resp.data.messageId +" is deleted successfully........"));
        navigate(-1);
    }
    return (
        <div style={{marginTop:"7%"}}>
               <NavBarAdmin/>
      <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
       <Link to="/viewAll/messages"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>
            <h2>Message Details</h2>
            {
                message !== null &&
                <div>
                    <p>Message Id: {message.messageId}</p>
                    <p> Message Text: {message.messageText}</p>
                    <p>Posted On: {message.postedOn}</p>
                    <p>Subject: {message.subject}</p>
                   
                   
                </div>
            }
            <div><button className = "btn btn-primary mb-2" onClick={deleteMessage}>Delete</button></div>
        </div>
    )
}
export default  DeleteMessage;