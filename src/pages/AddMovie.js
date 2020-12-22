import React, { Component } from "react";
import service from "../api/service"
import { withAuth } from "../lib/AuthProvider";

class AddMovie extends Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = async (e) => {
    console.log("the file to be uploaded is: ", e.target.files[0]);

    // creamos un nuevo objeto FormData
  
    // imageUrl (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
      const uploadData = new FormData();

      uploadData.append("imageUrl", e.target.files[0]);
      try{
        const res = await service.handleUpload(uploadData);
          console.log("response is", res);
      this.setState({ imageUrl: res.secure_url });
      }catch(error){
        console.log('error while uploading the', error)
      }
      
 
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await service.saveNewImage(this.state);
       

      this.setState({
        title: "",
        description: "",
        imageUrl: ""
      });
    } catch (error) {
        console.log("Error while adding the movie: ", error);
    }
  };

  render() {
    return (
      <div>
        <h2>New Movie</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit">Save new movie</button>
        </form>
      </div>
    );
  }
}

export default withAuth(AddMovie);
