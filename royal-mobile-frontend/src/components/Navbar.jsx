import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

const [dateTime,setDateTime] = useState(new Date());
const navigate = useNavigate();

useEffect(()=>{

const timer = setInterval(()=>{
setDateTime(new Date());
},1000);

return ()=> clearInterval(timer);

},[]);

const logout = ()=>{

localStorage.removeItem("token");   // remove login token
navigate("/");                      // redirect to login page

};

return(

<div className="navbar">

<h3>Royal Mobile</h3>

<div className="nav-right">

<span className="datetime">
{dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString()}
</span>

<button className="logout-btn" onClick={logout}>
Logout
</button>

</div>

</div>

);
}