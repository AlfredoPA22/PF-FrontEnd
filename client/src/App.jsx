import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Carsforsale from "./components/Carsforsale/Carsforsale";
import { Routes, Route,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import CryptoJS from 'crypto-js';
axios.defaults.baseURL = "https://pf-back.fly.dev/";
import Detail from "./components/Detail/Detail";
import Home from "./components/home/Home";
import UserDetail from "./components/UserDetail/UserDetail.jsx";

function App() {
  const navigate=useNavigate();
  const validationLogin=async()=>{
    const localAuth=localStorage.getItem("user");
    const localGuest=localStorage.getItem("guest");
    if(!localAuth){
      if(!localGuest){
        navigate('/')
      }else{
        navigate("/home");
      }
    }else{
      const {data}=await axios.post('/user/verifyUser',{email:localAuth});
      if(data.acces){
        navigate("/home");
      }else{
        localStorage.clear();
        navigate("/");
      }
    }
  }
  useEffect(()=>{
    const validation=async()=>{
      await validationLogin();
    }
    validation();
  },[])
  return (
    <main className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/carsforsale" element={<Carsforsale />}/>
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/userDetail" element={<UserDetail />} />
      </Routes>
    </main>
  );
}

export default App;
