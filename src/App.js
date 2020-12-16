import React, { Component } from "react";
import "./App.css";
import {Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import image from './pages/AddMovie';
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar />
          
          <Switch>

            <Route exact path="/" component={Home}/>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path="/image" component={image}/>
          </Switch>
          <Footer/>
        </div>
        
      </AuthProvider>
    );
  }
}

export default App;
