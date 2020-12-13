import React, { Component } from 'react'
import axios from 'axios'

export default class LocksAdd extends Component {

    state = {
        name: '',
        address: '',
        specialty: '',
        phone: ''
    }
  
    handleChange = event => {
      let { name, value } = event.target;
      this.setState({ [name]: value})
    }
    
    handleSubmit =  async (event) => {
      event.preventDefault();
      const {name, address, specialty, phone} = this.state
     await  axios.post('http://localhost:4000/api/locksmith/', {name, address, specialty, phone})
      this.setState({
          name: "",
          address: "",
          specialty: '',
          phone: ''
      })
    }
    render() {
        return (
            <div>
                <div>
        
        <div id="formCreate">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <label className="label" >address</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="label" >Specialty</label>
          <input
            type="text"
            name="specialty"
            value={this.state.specialty}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="label" >phone</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Save</button>
        </form>
        </div>

      </div>
            </div>
        )
    }
}
