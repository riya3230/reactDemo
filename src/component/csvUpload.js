import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import { Link } from "react-router-dom";

export default (props) => {
  const [isCSV, changeCSV] = useState(false);
  const handleFiles = async (files) => {
    var reader = new FileReader();
    let doc= {}
    reader.onload = async (e)=> {
      const data = await reader.result
      const string = data.split('\n')[0].split(' ')
      doc = {
        address:string[0],
        bedRoom:string[1],
        bathRoom:string[2],
        desc:string[3]
      }
      console.log(doc)
    };
    const tmp = await reader.readAsText(files[0]);
    console.log(tmp)
  };
  
  return (
    <div className="container">
    <div className="row">
      <div className="col col-md-4">
        <h1>Upload CSV</h1>
        <hr />
        <button type="button" class="btn btn-block btn-primary" onClick={() => { changeCSV(!isCSV); }}>
          Upload CSV
        </button>
        <button type="button" class="btn btn-block btn-success" onClick={() => {}}>
        <Link to="/imageUpload">Add details</Link>
        </button>

        {isCSV && (
            <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
              <button className="btn">Upload</button>
            </ReactFileReader>
          )}
      </div>

    </div>

  </div>
  );
};