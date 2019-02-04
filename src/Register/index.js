import React, {Component} from 'react';

class Register extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const resgisterResponse = await fetch('http://localhost:9000/auth/register', {
        method: 'POST',
        credentitals: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('this is resgisterResponse ----> ', resgisterResponse);

      const parsedJSON = await resgisterResponse.json();

      if(parsedJSON.data === 'register successful'){
        this.props.history.push('/login');
      } else {
        console.log('registration failed ')
      }
    } catch (err) {
      console.log('error at handleSubmit Register ----> ', err)
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>
            Email:
            <input type="text" onChange={this.handleChange} name="email" placeholder="Email"/>
          </label><br/>

          <label>
            Username:
            <input type="text" onChange={this.handleChange} name="username" placeholder="Username"/>
          </label><br/>

          <label>
            Password:
            <input type="password" onChange={this.handleChange} name="password" placeholder="Password"/>
          </label><br/>

          <button>Register</button>
        </form>
      </div>
    )
  }
}
export default Register;
