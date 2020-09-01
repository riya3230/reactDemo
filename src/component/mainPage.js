import React from "react";
import { Link } from "react-router-dom";
//Functional Component 
const MainPage = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col col-md-4">
            <h1>Simple Form</h1>
            <hr />
            <button type="submit" className="btn btn-block btn-danger"><Link to="/addData">Add from Scratch</Link></button>
            <button type="submit" className="btn btn-block btn-danger"><Link to="/csvUpload">Add csv</Link></button>
          </div>
        </div>

      </div>
  );
};

export default MainPage;