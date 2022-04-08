import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar';
import Menu from './components/menu';
import React, { Component } from 'react';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Burger from './components/burger';


function App() {
  return (
      <div className="App">
        <Router>
          <div>
            <Navbar></Navbar>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/menu' element={<Menu/>} />
              <Route path='/burger' element={<Burger/>} />
            </Routes>
          </div>
        </Router>
          </div>
  );
}

export default App;
