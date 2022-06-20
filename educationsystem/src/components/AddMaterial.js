import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../util/AppConstants";
import { useNavigate } from "react-router";
//import "../css/AddTrainer.css";
import { Link } from "react-router-dom";
import NavBarAdmin from "./NavBarAdmin";
function AddMaterial() {
  const [material, setMaterial] = useState({
    materialType: "",
    downloadLink: "",
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setMaterial((material) => ({
      ...material,
      [event.target.name]: event.target.value,
      //[event.target.name]: event.target.type === 'String' ? parseInt(event.target.value) : event.target.value,
    }));
  };
  const handleSubmit = () => {
    //validate add trainer form
    let errors = {};
    if (!material.materialType) {
      errors["materialTypeErr"] = "material type is required";
    }

    if (!material.downloadLink) {
      errors["downloadLinkErr"] = "download link is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        materialType: material.materialType,
        downloadLink: material.downloadLink,
      };
      axios
        .post(baseUrl + "/api/study/save", payload)
        .then((resp) =>
          alert("material is saved with id:" + resp.data.materialId)
        );
        navigate(-1);
    }
  };
  return (
    <div className="trainerbgpg" style={{marginTop:"7%"}}>
      <NavBarAdmin/>
       <div  style={{fontSize:"30px"}} className="mrginlistalltrainer"> <a class="previous">&laquo;</a> 
      <Link to="/getAllMaterial"  style={{color:"chocolate"}}className="previous round">Back</Link> </div>
      <div className="addingtrainerpage">
        <label>Material Type</label>
        <input
          id="mname"
          className="form-control"
          type="text"
          name="materialType"
          value={material.materialType}
          onChange={handleChange}
        />
        {formErrors.materialTypeErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.materialTypeErr}
          </div>
        )}
      </div>

      <div>
        <label>Download Link</label>
        <input
          id="dname"
          className="form-control"
          type="url"
          name="downloadLink"
          value={material.downloadLink}
          onChange={handleChange}
        />
        {formErrors.downloadLinkErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.downloadLinkErr}
          </div>
        )}
      </div>

      <div id="outer">
        <div class="inner1">
          <button className="btn btn-primary mb-2" onClick={handleSubmit}>
            Save
          </button>
        </div>
        <div class="inner2">
          <Link to="/getAllMaterial" className="btn btn-danger">
            {" "}
            Cancel{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AddMaterial;