import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";




class Private extends Component {
 
 

  render() {
    const {logout} = this.props
    return (
      <div>
        <h1>Bienvenido, {this.props.user.username}</h1>
        <img src="" alt="imagen"></img>
        <br></br>
        <button onClick={logout} >Logout</button>
        <p>¿Eres profesional? Anunciate en nuestra plataforma.</p>
      </div>
      
    );
  }
}

export default withAuth(Private);
