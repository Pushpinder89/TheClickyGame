import React from "react";
import "./ImageCompo.css";

function ImagesCompo(props) {
    return (
    <div className="card">
      <div className="img-container">
      <img alt ="cartoonimage" src={props.image}/>
      </div>
    </div>
    )
}

export default ImagesCompo;