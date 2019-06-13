import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize'

class Naviebar extends Component {
  render(){
    return(
      <Navbar className="nav-wrapper" right>
        <NavItem>Update User Info</NavItem>
        <NavItem>Logout</NavItem>
      </Navbar>
    )
  }
}


export default Naviebar
