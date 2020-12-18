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
        const res = await axios.get(`${process.env.REACT_APP_API_URI}/api/locksmith`);
        this.setState({ lockmasters: res.data });
        console.log(res.data);
      };
    
    render() {
        return (
            <div>
                <div className="tarjetas">
          {this.state.lockmasters.map(element => 
            <div className="tarjeta">
              <div className="cerrajeros">
                <p>{element.name}</p>
                <img src={element.image} alt=""/>
                <p>{element.specialty}</p>
                <p>{element.address}</p>
                <p>{element.phone}</p>
                <p>{element.web}</p>
              </div>
            </div>
            
          )}
          
          </div>
            </div>
        )
    }
}
