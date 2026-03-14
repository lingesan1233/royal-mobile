import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

export default function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const login = async()=>{

try{

const res = await API.post("/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

navigate("/dashboard");

}catch(err){
alert("Invalid Email or Password");
}

};

return(

<div className="login-container">

<div className="login-card">

<h2 className="login-title">📱 Royal Mobile</h2>
<p className="login-subtitle">Inventory Management System</p>

<input
className="login-input"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="login-input"
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="login-btn" onClick={login}>
Login
</button>

</div>

</div>

);
}