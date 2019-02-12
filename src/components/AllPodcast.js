import React, { Component } from 'react';
// import Create from './Create'
import SearchForm from './SearchForm'
import {InfiniteScroll} from 'react-materialize'


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
    <div>
      <div className="card-panel hoverable">
        <div>
          <SearchForm search={this.props.search} handleSearch={this.props.handleSearch}/>
          <button className="btn" onClick={this.props.addMore}>Load More</button>
          <button className="btn" onClick={this.props.back}>Go Back</button>
        </div>
        <div className="podcasts">
          <ul className="collection with-header">
            {
              this.props.allPodcast.map(podcast => {
                return(
                  <div key={podcast.id}>
                    <li
                      className="listitem hoverable collection-item left-align"
                      name="podcast-menu"
                      onClick={() => this.props.handlePodcastMenuClick(podcast.id)}
                      id="title">
                      <img src={podcast.thumbnail} alt="" className="left square"/>
                      {this.text_truncate(podcast.title, 30, '..')}
                    </li>
                    <br/>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default AllPodcast
