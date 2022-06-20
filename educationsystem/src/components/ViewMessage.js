import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";
import NavBarAdmin from "./NavBarAdmin";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router";


function ViewMessage() {
  //const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const fetchMessageById = () => {
    axios
      .get(baseUrl + "/api/message/get/" + id)
      .then((resp) => setMessage(resp.data));
    // navigate(-1);
  };
  useEffect(fetchMessageById, []);

  return (
<div  style={{marginTop:"7%"}}>
<NavBarAdmin/>
      <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/viewAll/messages"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div>

      <h2 style={{color:"green"}}> <u>Message By Id</u></h2>
      {message !== null && (
        <div>
          <p>MessageId:{message.messageId} </p>
          <p>MessageText: {message.messageText}</p>
          <p>PostedOn: {message.postedOn}</p>
          <p>Subject: {message.subject}</p>
        </div>
      )}
    </div>
  );
}
export default ViewMessage;
