import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ResturantContainer from './ResturantContainer';
import {Route, Link, Switch} from 'react-router-dom';
import Profile from './Profile';
import Welcome from './Welcome';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ResturantContainer} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
