import React, { Component } from 'react';
import Episode from './Episode'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class EpisodeContainer extends Component {


  render(){
    return(
      <div className="podcasts">
        <button className="waves-effect waves-light btn" onClick={this.props.addMoreEpisodes}>Load More</button>
        <button className="waves-effect waves-light btn" onClick={this.props.backEpisodes}>Go Back</button>
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
