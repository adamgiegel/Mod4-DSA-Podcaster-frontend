import React, { Component } from 'react';
import {Button, CollapsibleItem} from 'react-materialize'
import striptags from 'striptags'

class Episode extends Component {
  text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  render(){
    return(
      <>
        <CollapsibleItem  header={this.props.episode.title}>
          {striptags(this.text_truncate(this.props.episode.description, 500, '..'))}<br/>
          <Button onClick={()=>this.props.handleEpisodeMenuClick(this.props.episode.id)}  className="blue lighten-2">Play</Button>
        </CollapsibleItem>
      </>
    )
  }
}


export default Episode
