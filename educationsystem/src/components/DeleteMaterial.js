import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from "react-router";
import { baseUrl } from '../util/AppConstants';
import NavBarAdmin from './NavBarAdmin';
import { Link } from 'react-router-dom';
function  DeleteMaterial() {
    const[material, setMaterial] = useState(null)
    const { id } = useParams();
    const fetchMaterialById = () => {
       

        axios.get(baseUrl+"/api/study/get/" + id).
        then(resp => setMaterial(resp.data))
    }
    const navigate = useNavigate();
    useEffect(fetchMaterialById, []);
    const DeleteMaterial = () => {
        axios.delete(baseUrl+"/api/study/delete/"+id).
        then(resp => alert("material id:"+resp.data.materialId +" is deleted successfully........")
        );
        navigate(-1);
    }
    return (
        <div style={{marginTop:"7%"}}>
              <NavBarAdmin/>
        
        <div  style={{fontSize:"30px"}} className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
       <Link to="/getAllMaterial"  style={{color:"chocolate"}}className="previous round">Back</Link> </div>
            <h2>Material Details</h2>
            {
                material !== null &&
                <div>
                    <p>MaterialId: {material.materialId}</p>
                    <p>Material Type: {material.materialType}</p>
                    <p>DownloadLink: {material.downloadLink}</p>
                </div>
            }
            <div><button className = "btn btn-primary mb-2" onClick={DeleteMaterial}>Delete</button></div>
        </div>
    )
}
export default DeleteMaterial;