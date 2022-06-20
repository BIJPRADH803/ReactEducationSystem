import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../util/AppConstants";
import NavBarAdmin from "./NavBarAdmin";
function ViewMaterial() {
  const [material, setMaterial] = useState(null);
  const { id } = useParams();
  const fetchMaterialById = () => {
    axios
      .get(baseUrl + "/api/study/get/" + id)
      .then((resp) => setMaterial(resp.data));
  };
  useEffect(fetchMaterialById, []);

  return (
    <div  style={{marginTop:"7%"}}>
        <NavBarAdmin/>
        
       <div  style={{fontSize:"30px"}} className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllMaterial"  style={{color:"chocolate"}}className="previous round">Back</Link> </div>
      <h2 style={{color:"green"}}><u>Material By Id</u></h2>
      {material !== null && (
        <div>
          <p>Id: {material.materialId}</p>
          <p>MaterialType: {material.materialType}</p>
          <p>DownloadLink: {material.downloadLink}</p>
        </div>
      )}
      <div>
        
        <a class="previous">&laquo;</a>
        <Link to="/getAllMaterial" className="previous round">
          Previous Page
        </Link>
      </div>
    </div>
  );
}

export default ViewMaterial;
