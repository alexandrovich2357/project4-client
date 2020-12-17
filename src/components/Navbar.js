import React  from "react";
import { Link } from "react-router-dom";






export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="enlace" to={"/"}><h1 className="home">STAYPROF</h1></Link>
      <Link className="login" to={"/login"}><h1>LOGIN</h1></Link>
      <Link className="signup" to={"/signup"}><h1>SIGNUP</h1></Link>
    </div>
  )
}

  
  


