import React, {Component} from 'react';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = async(e) =>{
    e.preventDefault();
    try {

      const LoginResponse = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await LoginResponse.json();
      console.log(parsedResponse, 'this is parsedResponse in login')

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/welcome')
      }else if(parsedResponse.data === 'password wrong'){
        alert('password entered incorrect')
      }else if( parsedResponse.data == 'username wrong'){
        alert('username entered incorrect')
      }
    } catch (err) {
      console.log('error in login handleSubmit', err.message)
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
            Username:
            <input type="text" onChange={this.handleChange} name="username" placeholder="Username"/>
          </label><br/>

          <label>
            Password:
            <input type="password" onChange={this.handleChange} name="password" placeholder="Password"/>
          </label><br/>

          <button>Login</button>
        </form>
      </div>
    )
  }
}
export default Login;
