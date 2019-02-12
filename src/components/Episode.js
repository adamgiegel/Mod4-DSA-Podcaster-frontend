import React, { Component } from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize'

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
      <Collapsible accordion defaultActiveKey={1}>
        <CollapsibleItem  header={this.props.episode.title}>
          {this.text_truncate(this.props.episode.description, 500, '..')}
        </CollapsibleItem>
        <button onClick={()=>this.props.handleEpisodeMenuClick(this.props.episode.id)} className="waves-effect waves-light btn">Play</button>
      </Collapsible>
    )
  }
}


export default Episode
