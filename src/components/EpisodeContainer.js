import React, { Component } from 'react';
import Episode from './Episode'
import 'materialize-css/dist/css/materialize.min.css';
import { Collapsible } from 'react-materialize'

class EpisodeContainer extends Component {


  render(){
    return(
      <div className="episodes-container">
        <Collapsible popout defaultActiveKey={1}>
          {
            this.props.episodes.map(episode => <Episode
                handleEpisodeMenuClick={this.props.handleEpisodeMenuClick}
                key={episode.id}
                episode={episode}
              />
            )
          }
        </Collapsible>
      </div>
    )
  }
}


export default EpisodeContainer
