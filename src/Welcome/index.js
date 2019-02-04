import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component{
  render(){
    return(
      <div>
        <nav>
          <Link to="/">Home</Link><br/>
          <Link to="/login">Login</Link><br/>
          <Link to="/register">Register</Link><br/>
          <Link to="/profile">Profile</Link><br/>
          <Link to="/logout">Logout</Link><br/>
        </nav>
      </div>
    )
  }
}
export default Welcome;
