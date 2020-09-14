import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import HomePage from './component/HomePage'
import Error from './component/Error'

  
const App = (props) => {
  return (
    <div>
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/Login" component={Login} />
         <Route exact path="/Register" component={Register} />
         <Route component={Error} />
       </Switch>
    </div>
  );
}

export default App;
