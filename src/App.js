import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Signup from './components/signup';
import Signin from './components/signin';
import Profile from './components/profile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <ToastContainer theme='dark'/>
    </div>
    </BrowserRouter>
  );
}

export default App;

