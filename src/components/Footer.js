import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer'

class Footer extends Component {
  render(){
    return(
        <>
        {!this.props.hide ?
        <AudioPlayer thumbnail={this.props.thumbnail} podcast={this.props.podcast} episode={this.props.episode} />
        : null}
        </>

    )
  }
}


export default Footer
