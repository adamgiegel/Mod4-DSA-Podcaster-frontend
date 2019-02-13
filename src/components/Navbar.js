import React, { Component } from 'react';

class Navbar extends Component {
  render(){
    return(
      <nav className="nav-wrapper">
        <div >
          <a href="c" className="cat-logo"></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href='a'>Playlist</a></li>
            <li><a href='b'>Update User Info</a></li>
            <li><a href='c'>Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Navbar
