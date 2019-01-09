import React from "react";
// import {nav} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

function NavbarCompo(){
    return (
        <div>
        <nav class="navbar navbar-light bg-dark">
        
        <h1 className="navTop">Clicky Game</h1> 
        <h1 className="navTop">Sorry, wrong guess</h1>
        <h3 className="navTop">Your Score: <span id="uScore"></span> | Highest Score:<span id="hScore"></span></h3>
       
        </nav>
    </div>
    )
}
export default NavbarCompo;