import React, { Component } from 'react';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
import { Card, Button, Row, Col } from 'react-materialize'
// import BackgroundImage from 'https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif'

class Login extends Component {
  state = {
    showSignUp: false,
    name: '',
    username: '',
    password: '',
    backgroundImage: 'url("https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif")'
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
      <Card className="login">
        <form onSubmit={(e) => this.props.handleLogin(e, this.state.username, this.state.password)}>
          <label>
            Username:
            <input value={this.state.username} onChange={(e) => this.handleChange(e)} type="text" name="username" placeholder="user your username"/>
          </label>
          <label>
            Password:
            <input value={this.state.password} onChange={(e) => this.handleChange(e)} type="password" name="password"/>
          </label>
          <Button className="blue lighten-2">Submit</Button>
          </form>
          <br/>
          <Button className="blue lighten-2" onClick={this.handleSignUpButton}>SignUp</Button>
      </Card>
    )
  }

  signUpForm(){
    return (
      <div style={{backgroundImage: this.state.backgroundImage}}>
      <Card>
        <form onSubmit={(e) => this.fetchSignUp(e)}>
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
          <Button className="blue lighten-2">Submit</Button>
        </form>
        <Button  className="blue lighten-2" onClick={this.handleSignUpButton}>Login Page</Button>
        <br/>
      </Card>
      </div>
    )
  }

  render(){
    // console.log("render: ", this.state);
    return(
      <Row className="login-form">
        <Col s={4}>
        </Col>
        <Col s={3} m={4}>
          {this.state.showSignUp === false ? this.loginForm() : this.signUpForm()}
        </Col>
      </Row>
    )
  }
} // end of Login component

export default Login
