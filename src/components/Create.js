import React, { Component } from 'react';

class Create extends Component {
  handleSubmit = () => {
    fetch()
  }

  render(){
    return(
      <div>
        <form className='col s3' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Put your damn name here"/>
          </label>
          <label>
            Username:
            <input type="text" name="username" placeholder="user your username"/>
          </label>
          <label>
            Password:
            <input type="password" name="password"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
} // end of Login component


export default Create
