import React, { Component } from 'react';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';

class Login extends Component {
  state = {
    showSignUp: false,
    name: '',
    username: '',
    password: ''
  }

  fetchSignUp = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify({
        "name": this.state.name,
        "username": this.state.username,
        "password": this.state.password
      })
    })
    .then(window.location.href = 'http://localhost:3001/dashboard')
  }

  handleChange = (e) =>{
    if (e.target.name === 'name'){
      this.setState({
        name: e.target.value
      })
    } else if (e.target.name === 'username'){
      this.setState({
        username: e.target.value
      })
    } else if (e.target.name === 'password'){
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSignUpButton = () => {
    this.setState({
      name: '',
      username: '',
      password: '',
      showSignUp: !(this.state.showSignUp)
    })
  }

  loginForm(){
    return(
      <div>
        <form className='col s3' onSubmit={(e) => this.props.handleLogin(e, this.state.username, this.state.password)}>
          <label>
            Username:
            <input value={this.state.username} onChange={(e) => this.handleChange(e)} type="text" name="username" placeholder="user your username"/>
          </label>
          <label>
            Password:
            <input value={this.state.password} onChange={(e) => this.handleChange(e)} type="password" name="password"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleSignUpButton}>SignUp</button>
      </div>
    )
  }

  signUpForm(){
    return (
      <div>
        <form className='col s3' onSubmit={(e) => this.fetchSignUp(e)}>
          <label>
            Name:
            <input value={this.state.name} onChange={(e) => this.handleChange(e)} type="text" name="name" placeholder="Put your damn name here"/>
          </label>
          <label>
            Username:
            <input value={this.state.username} onChange={(e) => this.handleChange(e)} type="text" name="username" placeholder="user your username"/>
          </label>
          <label>
            Password:
            <input value={this.state.password} onChange={(e) => this.handleChange(e)} type="password" name="password"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleSignUpButton}>Login Page</button>
      </div>
    )
  }

  render(){
    // console.log("render: ", this.state);
    return(
      <>
      {this.state.showSignUp === false ? this.loginForm() : this.signUpForm()}
      </>
    )
  }
} // end of Login component

export default Login
