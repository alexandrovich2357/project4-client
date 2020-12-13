import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Home extends Component {

  state = {
    lockmasters: []
  }
        async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/locksmith')
        this.setState({lockmasters: res.data})
        console.log(res.data)        
        }

  render() {
    return (
      <div>
        <div> 
      <h1>WELCOME TO LOCKSMASTER FIND</h1>    
      <Link to='/login'>
            <button className='activeButton'>Login</button>
          </Link>
          <br />
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
          <p>Eres profesional? Únete a nosotros.</p>
        <div className="tarjetas">
          {this.state.lockmasters.map(element => 
            <p>{element.name}</p>
            
          )}
          </div>

    </div>
      </div>
    )
  }
}
