import React from "react";
// import {nav} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './instDiv.css';

function InstructionsDiv(){
    return (
        <div id="instDiv">
        <h1 id="InstTitle">
        Clicky Game
        </h1>
        <h3>Click on an image to earn points, but don't click on any more than once !</h3>
        </div>
    )
}
export default InstructionsDiv;