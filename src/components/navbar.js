import React from 'react';
import logo from "../img/logo.png"
import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className='nav-menu'>
                <Link to="/signup"><li>Sign Up</li></Link>
                <Link to="/signin"><li>Sign In</li></Link>
                <Link to="/profile"><li>Profile</li></Link>




            </ul>
        </div>
    )
}

export default Navbar;
