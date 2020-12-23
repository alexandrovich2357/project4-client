import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


class cerrajeros extends Component {
    state = {
        lockmasters: [],
        date: new Date().toLocaleDateString()
        
      };
    
      async componentDidMount() {
        this.getlockmasters();
      }
    
      getlockmasters = async () => {
        try{
          const res = await axios.get(`${process.env.REACT_APP_API_URI}/lock/locksmith`);
          // console.log(res.data)
          this.setState({ lockmasters: res.data });
        ;}
        catch(error) {
          console.log(error)
        }
        
      };

      // let petition = await axios({method: "get", url: `${process.env.REACT_APP_API_URI}/players`,});

      
    
      deleter = async (id) => {
        try{
          await axios.delete(`${process.env.REACT_APP_API_URI}/lock/locksmith/${id}`)
          // console.log(id)
        this.getlockmasters()
        }
        catch(error) {
          console.log(error)
        }
        
         
    }

    render() {
        return (
            <div>
                <div className="tarjetas">
          {this.state.lockmasters.map((element)=> 
            (<div className="tarjeta" key={element._id}>
              
                <p className="nombre">{element.name}</p>
                <img className="imagen" src={element.imageUrl} alt=""/>
                <p>{element.specialty}</p>
                <p>{element.address}</p>
                <p>{element.phone}</p>
                <p>{element.web}</p>
                <p>{this.state.date}</p>
                <button className="delete" onClick={() => this.deleter(element._id)}>Delete</button>
                <Link to={'/edit/' + element._id }><button className="edit">Edit</button></Link>
              
            </div>)
            
          )}
          
          </div>
            </div>
        )
    }
}

export default cerrajeros