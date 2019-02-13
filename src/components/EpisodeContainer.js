import React, { Component } from 'react';
import Episode from './Episode'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class EpisodeContainer extends Component {


  render(){
    return(
      <div className="podcasts">
        <ul className="collection with-header">
          {
            this.props.episodes.map(episode => <Episode
                handleEpisodeMenuClick={this.props.handleEpisodeMenuClick}
                key={episode.id}
                episode={episode}
              />
            )
          }
        </ul>
      </div>
    )
  }
}


export default EpisodeContainer
