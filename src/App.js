import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Signup from './components/signup';
import Signin from './components/signin';
import Profile from './components/profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './components/Createpost';
import { LoginContext } from "./context/LoginContext"

function App() {
  const [userLogin, setUserLogin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{ setUserLogin }}>
          <Navbar login={userLogin}/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/createPost" element={<Createpost />}></Route>
          </Routes>
          <ToastContainer theme='dark' />
        </LoginContext.Provider>

      </div>
    </BrowserRouter>
  );
}

export default App;

