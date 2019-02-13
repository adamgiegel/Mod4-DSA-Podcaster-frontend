import React, { Component } from 'react';
import SearchForm from './SearchForm'
import { Collection, CollectionItem, Button } from 'react-materialize'


class AllPodcast extends Component {

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
    <div className="content">
      <div className="card-panel hoverable center">
        <div>
          <SearchForm search={this.props.search} handleSearch={this.props.handleSearch}/>
        </div>
        <Button  className="blue lighten-2" onClick={this.props.handleFavorites}>FAVORITES</Button>
        <br/>
        <br/>
        <div className="podcasts-container hoverable">
          <Collection>
            {
              this.props.allPodcast.map(podcast => {
                return(
                    <CollectionItem
                      className="card-panel hoverable left-align"
                      onClick={() => this.props.handlePodcastMenuClick(podcast.id)}
                      id="title">
                      <img src={podcast.thumbnail} alt="" className="left square"/>
                      {this.text_truncate(podcast.title, 30, '..')}
                    </CollectionItem>
                )
              })
            }
          </Collection>
          </div>
      </div>
    </div>
    )
  }
}

export default AllPodcast
