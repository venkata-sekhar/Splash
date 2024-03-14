import React from "react";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar" style={{backgroundColor:"black"}}>
                <div className="container m-3">
                <Link to='/' className="logo">SPLASH</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;