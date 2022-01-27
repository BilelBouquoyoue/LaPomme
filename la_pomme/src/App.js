import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/menu' component={Menu} />
      <></>
      <Redirect to='/'></Redirect>
    </Switch>
  );
};

export default App;