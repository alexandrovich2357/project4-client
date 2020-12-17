import React, { Component } from 'react'
import axios from 'axios'

export default class LocksAdd extends Component {

    state = {
        name: '',
        address: '',
        specialty: '',
        phone: '',
        web: ''
    }
  
    handleChange = event => {
      let { name, value } = event.target;
      this.setState({ [name]: value})
    }
    
    handleSubmit =  async (event) => {
      event.preventDefault();
      const {name, address, specialty, phone, web} = this.state
     await  axios.post('http://localhost:4000/api/locksmith/', {name, address, specialty, phone, web})
      this.setState({
          name: "",
          address: "",
          specialty: '',
          phone: '',
          web: ''
      })
    }
    render() {
        return (
            <div>
                <div>
        
        <div id="idSignupAndLogin">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label className="label">Nombre</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <label className="label" >Dirección</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="label" >Especialidad</label>
          <input
            type="text"
            name="specialty"
            value={this.state.specialty}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="label" >Teléfono</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="label" >Web</label>
          <input
            type="text"
            name="web"
            value={this.state.web}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Guardar</button>
        </form>
        </div>
          <p>Estos datos serán revisados.</p>
      </div>
            </div>
        )
    }
}
