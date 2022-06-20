import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
// import { baseUrl } from "../util/AppConstants";

//import "../css/ListAllTrainer.css";

function ListAllMaterial() {
  const [material, setMaterial] = useState([]);

  

  const fetchAll = () => {
    axios
      .get(
        "http://localhost:8081/api/study/all"
      )
      .then((resp) => setMaterial(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container"  style={{marginTop:"7%"}}>
    
  <NavBarAdmin/>
       <div  style={{fontSize:"30px"}} className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/admin/dashboard"  style={{color:"chocolate"}}className="previous round">Back</Link> </div>
      <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">List All Materials</h4>
      <hr />
      
      <Link to = "/AddMaterial" className = "btn btn-primary mb-2" > Add Material </Link>
      <table  className="table table-bordered table-striped">
        <thead  class="thead-dark">
          <tr>
            <th>MaterialId</th>
            <th>MaterialType</th>
            <th>DownloadLink</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {material.map((t, index) => (
            <tr  class="table-info" key={index}>
              <td>{t.materialId}</td>
              <td>{t.materialType}</td>
              <td>{t.downloadLink}</td>
              <td>
                <Link to={`/material/view/${t.materialId}`}   className = "btn btn-primary mb-2" >View</Link>
              </td>
              <td>
                <Link to={`/material/edit/${t.materialId}`}  className = "btn btn-primary mb-2" >Update</Link>
              </td>
              <td>
                <Link to={`/material/delete/${t.materialId}`}  className = "btn btn-primary mb-2" >Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}
export default ListAllMaterial;