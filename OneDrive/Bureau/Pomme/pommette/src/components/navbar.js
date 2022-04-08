import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import React from 'react'
import Home from "./home";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Pomme from './img/pomme_logo.png'


class Navbar extends React.Component {

  
    render() {
      return <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={Pomme} alt="" width="130%" height="30"/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  <a class="nav-link" href="/home">Features</a>
                  <a class="nav-link" href="/menu">Menu</a>
                  <a class="nav-link disabled">Disabled</a>
                </div>
              </div>
            </div>
          </nav>
      </div>;
    }
  }

  export default Navbar;