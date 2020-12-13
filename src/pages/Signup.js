import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div id="idSignupAndLogin">
        <h1>Sign Up</h1>
        <div className="signupLoginLinks">
          <Link to='/login'>
            <button className=''>Login</button>
          </Link>
          <br />
          <Link to='/signup'>
            <button className='activeButton'>Sign Up</button>
          </Link>
        </div>
        {/* <h1>todi todi | nange nang  =  poco a poco</h1>
        <h2>Diore diof </h2> */}
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />

          <input type='submit' value='Signup' />
        </form>
        <div class="already">
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
        </div>
        
      </div>
    );
  }
}

export default withAuth(Signup);
