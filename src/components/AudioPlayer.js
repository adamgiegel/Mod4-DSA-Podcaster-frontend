import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends Component {
  render(){
    return(
      <div className="center card-panel hoverable">
        <img alt="episode thumbnail" src={this.props.thumbnail}/>
        <h5>{this.props.podcast.title}</h5>
        <p>{this.props.episode.title}</p>
        <ReactAudioPlayer
          src={this.props.episode.audio_url}
          autoPlay
          controls
        />
      </div>
    )
  }
}


export default AudioPlayer
