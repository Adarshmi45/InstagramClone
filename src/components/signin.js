import React from 'react';
import './signin.css'
import logo from "../img/logo.png"
import { Link } from "react-router-dom"


function Signin() {
    return (
        <div className='SignIn' >
            <div>
                <div className='loginForm'>
                    <img className="Signup_logo" src={logo} alt="" />
                    <div>
                        <input type="email" name='email' id="email" placeholder='Email' />
                    </div>
                    <div>
                        <input type="password" name='password' id="password" placeholder='Password' />
                    </div>
                    <input type="submit" id="login-btn" value="Sign In" />
                </div>
                <div className='loginForm2'>
                    Don't have an account ?<Link to="/signup"> 
                    <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span></Link>

                </div>
            </div>
        </div>
    )
}

export default Signin;
