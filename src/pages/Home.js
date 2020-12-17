import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
  
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
        <div className="discurso">
          <p>
            
          </p>
        </div>
      </div>
    );
  }
}
