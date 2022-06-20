import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
import { Link } from 'react-router-dom';
// import "../css/UpdateMaterial.css";
function UpdateMaterial() {
    const [material, setMaterial] = useState({
     
     materialId: "",
     materialType: "",
     downloadLink: ""
        
    });
    const { id } = useParams();  
   
    const navigate = useNavigate();
    const fetchMaterialById = () => {
        axios.get(baseUrl+"/api/study/get/"+id)
        .then(resp => setMaterial(resp.data))
    }
    useEffect(fetchMaterialById, []);
    const handleChange = (event) => {
        setMaterial(material => ({ ...material, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {
        const palyload = {
            materialId: material.materialId,
            materialType: material.materialType,
            downloadLink:material.downloadLink
            
        }
        axios.put(baseUrl+"/api/study/update", palyload)
            .then(resp => alert("material id: " +resp.data.materialId +" updated successfully........"));
        navigate(-1);
    }
    return (
        <div className="trainerbgpg" style={{marginTop:"7%"}}>
            <NavBarAdmin/>
        
        <div  style={{fontSize:"30px"}} className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
       <Link to="/getAllMaterial"  style={{color:"chocolate"}}className="previous round">Back</Link> </div>
      <div className="addingtrainerpage">
        <label>Material ID</label>
        <input
          id="mname"
          className="form-control"
          type="text"
          name="materialId"
          value={material.materialId}
          onChange={handleChange} disabled/>
          </div>
       <div>
            <label>Material Type</label>
        <input
          id="mtype"
          className="form-control"
          type="text"
          name="materialType"
          value={material.materialType}
          onChange={handleChange}/>
            </div>
           
            <div>
            <label>Download Link</label>
        <input
          id="dtype"
          className="form-control"
          type="text"
          name="downloadLink"
          value={material.downloadLink}
          onChange={handleChange}/>
            </div>
            <div>
                <button className = "btn btn-primary mb-2" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default  UpdateMaterial;