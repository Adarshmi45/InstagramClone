import React from 'react';
import logo from "../img/logo.png"
import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar({ login }) {

    const loginStatus = () => {
        const token = localStorage.getItem("jwt")
        if (login || token) {
            return [
                <>
                    <Link to="/profile"><li>Profile</li></Link>
                    <Link to="/createPost"><li>Create Post</li></Link>
                </>
            ]
        } else {
            return [
                <>
                    <Link to="/signup"><li>Sign Up</li></Link>
                    <Link to="/signin"><li>Sign In</li></Link>
                </>
            ]
        }
    };

    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className='nav-menu'>
                {loginStatus()}
            </ul>
        </div>
    )
}

export default Navbar;
