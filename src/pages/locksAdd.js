import React, { Component } from 'react'
import service from "../api/service"
import axios from 'axios'
import { withAuth } from "../lib/AuthProvider";

 class LocksAdd extends Component {

    state = {
        name: '',
        address: '',
        specialty: '',
        phone: '',
        web: '',
        imageUrl: ''
    }
  
    handleChange = event => {
      let { name, value } = event.target;
      this.setState({ [name]: value})
    }

    // prueba

    handleFileUpload = async (e) => {
      console.log("the file to be uploaded is: ", e.target.files[0]);
  
      // creamos un nuevo objeto FormData
      
  
      // imageUrl (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
      const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
  
      try {
        const res = await service.handleUpload(uploadData);
        // console.log("response is", res);
        this.setState({ imageUrl: res.secure_url });
      } catch (error) {
          console.log("Error while uploading the file: ", error);
      }
    };

    // PRUEBA
    
    handleSubmit =  async (event) => {
      event.preventDefault();
      try {
        const {name, address, specialty, phone, web, imageUrl} = this.state
        await axios.post(`${process.env.REACT_APP_API_URI}/lock/locksmith`, {name, address, specialty, phone, web, imageUrl});
        
         await service.saveNewImage(this.state);
        
      
      this.setState({
          name: "",
          address: "",
          specialty: '',
          phone: '',
          web: '',
          imageUrl: ''
      })
    }catch(error){
      console.log(error)
    }
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
          <label className="label">Foto</label>
          <input type="file" className="upfile" style={{color: 'transparent'}} onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit">Guardar</button>
        </form>
        </div>
          <p>Estos datos serán revisados.</p>
      </div>
            </div>
        )
    }
}

export default withAuth(LocksAdd)