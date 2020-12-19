import React, { Component } from 'react';
import axios from 'axios';

export default class cerrajeros extends Component {
    state = {
        lockmasters: [],
      };
    
      async componentDidMount() {
        this.getlockmasters();
      }
    
      getlockmasters = async () => {
        const res = await axios.get(process.env.REACT_APP_API_URI+'api/locksmith');
        this.setState({ lockmasters: res.data });
        console.log(res.data);
      };

      
    
      deleter = async (id) => {
        await axios.delete(process.env.REACT_APP_API_URI+'api/locksmith/' + id)
         console.log(id)
        this.getlockmasters()
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
