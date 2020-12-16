import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  state = {
    lockmasters: [],
    image: "",
  };

  async componentDidMount() {
    this.getlockmasters();
  }

  getlockmasters = async () => {
    const res = await axios.get("http://localhost:4000/api/locksmith");
    this.setState({ lockmasters: res.data });
    console.log(res.data);
  };

  render() {
    return (
      <div id="home">
        <h1 className="encuentra">Encuentra a tu profesional</h1>
        <img src="" alt="" />
        <div className="profesionales">
          <div className="profesional">
            <Link className="enlace" to={"/cerrajeros"}>
              CERRAJEROS
            </Link>
          </div>
          <div className="profesional">
            <Link className="enlace" to={"/pintores"}>
              PINTORES
            </Link>
          </div>
          <div className="profesional">
            <Link className="enlace" to={"/fontaneros"}>
              FONTANEROS
            </Link>
          </div>
          <div className="profesional">
            <Link className="enlace" to={"/albañiles"}>
              ALBAÑILES
            </Link>
          </div>
        </div>

        {/* <div className="tarjetas">
          {this.state.lockmasters.map(element => 
            <div className="tarjeta">
              
              <div className="cerrajeros">
                <p>{element.name}</p>
                <img src={element.image} alt=""/>
                <p>{element.specialty}</p>
                <p>{element.address}</p>
                <Link href="tel"><p>{element.phone}</p></Link>
                <Link className="web" to={element.web}>{element.web}</Link>
              </div>
            </div>
            
          )}
          
          </div> */}
      </div>
    );
  }
}
