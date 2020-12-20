import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import LocksAdd from "./locksAdd";
import axios from 'axios';




class Private extends Component {
  state = {
    users: [],
    showForm: false
  }

  async componentDidMount()  {
    const res = await axios.get(`http://localhost:4000/api/users`)
    console.log(res.data)
    this.setState({users: res.data})
  }



  

  showFormClick = () => {
    this.setState({showForm: !this.state.showForm})
    console.log('adios')
  }
 
 
  render() {
    const {logout} = this.props
    return (
      <div id="profile">
        <div className="profileCard">
        <img src={this.props.user.image} alt=""/>
        <br></br>
        <h1>Bienvenido, {this.props.user.username}</h1>
        <button onClick={logout}>Logout</button>
        <p>
        ¿Eres profesional? 
        <p className="unete" onClick={this.showFormClick}>Únete.</p>
        </p>
       { this.state.showForm? <LocksAdd/> : null}
      </div>
      </div>
      
    );
  }
}

export default withAuth(Private);
