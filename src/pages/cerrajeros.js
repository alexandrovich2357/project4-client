import React, { Component } from 'react';
import axios from 'axios';

class cerrajeros extends Component {
    state = {
        lockmasters: [],
      };
    
      async componentDidMount() {
        this.getlockmasters();
      }
    
      getlockmasters = async () => {
        const res = await axios.get(`http://localhost:4000/lock/locksmith`);
        this.setState({ lockmasters: res.data });
        console.log(res.data);
      };

      
    
      deleter = async (id) => {
        try{
          await axios.delete('http://localhost:4000/lock/locksmith/'+id)
          console.log(id)
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
          {this.state.lockmasters.map((element )=> 
            <div className="tarjeta">
              <div className="cerrajeros" key={element._id}>
                <p className="nombre">{element.name}</p>
                <img src={element.image} alt=""/>
                <p>{element.specialty}</p>
                <p>{element.address}</p>
                <p>{element.phone}</p>
                <p>{element.web}</p>
                <button className="delete" onClick={() => this.deleter(element._id)}>Delete</button>
              </div>
            </div>
            
          )}
          
          </div>
            </div>
        )
    }
}

export default cerrajeros