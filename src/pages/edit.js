import React, { Component } from 'react'
import axios from 'axios'
import { withAuth } from '../lib/AuthProvider'


class Edit extends Component {
    state = {
        name: '',
        address: '',
        specialty: '',
        phone: '',
        web: '',
        _id: this.props.match.params.id
    }
   
   

    async componentDidMount(){
        try {
        const res = await axios.get(`${process.env.REACT_APP_API_URI}/lock/locksmith/${this.props.match.params.id}`);
        console.log(res.data)
        this.setState({
            name: res.data.name,
            address: res.data.address,
            specialty: res.data.specialty,
            phone: res.data.phone,
            web: res.data.web
        })}catch(error){
            console.log(error)
        }
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    }

    update =  async (event) => {
       try{ event.preventDefault();
        await axios.put(`${process.env.REACT_APP_API_URI}/lock/locksmith/${this.state._id}`, {name: this.state.name, address: this.state.address, specialty: this.state.specialty, phone: this.state.phone, web: this.state.web})
        window.location.href="/cerrajeros";}catch(error){
            console.log('error')
        }
    }
   
    

    render() {
        return (
            <div id="idSignupAndLogin">
                 <form onSubmit={this.update}>
                 <label>name</label>
                 <input type="text" id="name" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
                 <label>address</label>
                 <input type="text" id="body" name="address" value={this.state.address} onChange={(e) => this.handleChange(e)} />
                 <label>specialty</label>
                 <input type="text" id="specialty" name="specialty" value={this.state.specialty} onChange={(e) => this.handleChange(e)} />
                 <label>phone</label>
                 <input type="text" id="body" name="phone" value={this.state.phone} onChange={(e) => this.handleChange(e)} />
                 <label>web</label>
                 <input type="text" id="body" name="web" value={this.state.web} onChange={(e) => this.handleChange(e)} />
                 <button type="submit" value="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default withAuth(Edit)