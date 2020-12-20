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

    try{
    const res = await axios.get(`${process.env.REACT_APP_API_URI}/fileup/users`)
    console.log(res.data)
    this.setState({users: res.data})
    }catch(error){
      console.log(error)
    }
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
