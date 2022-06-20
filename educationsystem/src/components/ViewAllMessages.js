import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";
import "../css/ViewAllMessages.css";
import NavBarAdmin from "./NavBarAdmin";
export default function ViewAllMessages() {
  const [messages, setMessages] = useState([]);

  const fetchAll = () => {
    axios
      .get(baseUrl + "/api/message/all")
      .then((resp) => setMessages(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container-fluid" style={{marginTop:"7%"}}>
        <NavBarAdmin/>
      <div className="mrginprvmsg">
      
        <a style={{ fontSize: "30px" }} class="previous">
          &laquo;
        </a>
        <Link
          to="/admin/dashboard"
          style={{ color: "chocolate", fontSize: "30px" }}
          className="previous round"
        >
          Back
        </Link>
      </div>
      <h4
        style={{
          color: "red",
          backgroundColor: "powderblue",
          fontSize: "30px",
        }}
        className="text-center"
      >
        MESSAGE LIST
      </h4>
      <hr />

      <Link to="/add/message" className="btn btn-primary mb-2">
   
        Add Message
      </Link>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>MessageId</th>
            <th>MessageText</th>
            <th>PostedOn</th>
            <th>Subject</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((m, index) => (
            <tr key={index + 1}>
              {/* <td>{index+1}</td> */}
              <td>{m.messageId} </td>
              <td>{m.messageText}</td>
              <td>{m.postedOn}</td>
              <td>{m.subject}</td>
              <td>
                <Link
                  to={`/view/message/${m.messageId}`}
                  className="btn btn-primary mb-2"
                >
                  View
                </Link>
              </td>
              <td>
                <Link
                  to={`/update/message/${m.messageId}`}
                  className="btn btn-primary mb-2"
                >
                  Update
                </Link>
              </td>
              <td>
                <Link
                  to={`/message/delete/${m.messageId}`}
                  className="btn btn-primary mb-2"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
