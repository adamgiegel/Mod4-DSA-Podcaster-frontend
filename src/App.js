import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AllPodcast from './components/AllPodcast'
import Footer from './components/Footer'
import Naviebar from './components/Naviebar'
import Login from './components/Login'
import SelectedPodcast from './components/SelectedPodcast'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";

class App extends Component {
  state = {
    allPodcast: [],
    podcast: {},
    show: false,
    episode: {},
    thumbnail: {},
    search: '',
    filter: [],
    currentUser: {},
    loggedIn: false,
    hide: true,
    favorites: [],
    favoriteShow: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/podcasts')
    .then(response => response.json())
    .then(podcast => {
      podcast.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
      this.setState({
        allPodcast: podcast
      })
    })
  }

  filterSearchBar = () => {
    if(!this.state.favoriteShow){
    return this.state.allPodcast.filter(podcast => podcast.title.toLowerCase().includes(this.state.search.toLowerCase()))
  } else {
    return this.state.favorites.filter(podcast => podcast.title.toLowerCase().includes(this.state.search.toLowerCase()))
  }
  }

  fetchUser(username, password){
    fetch('http://localhost:3000/api/v1/users/login', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify({
        "username": username,
        "password": password
      }),
      redirect: "follow"
    })
    .then(res => res.json())
    .then(res => this.setState({
      currentUser: res,
      loggedIn: true,
      favorites: res.podcasts
    }))
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handlePodcastMenuClick = (id) => {
    const foundPodcast = this.state.allPodcast.find(podcast => {
        return podcast.id === id
    })
    this.setState({
      podcast: foundPodcast,
      show: true
    })
  }

  handleEpisodeMenuClick = (id) => {
    const foundEpisode = this.state.podcast.episodes.find(episode => {
        return episode.id === id
    })
    this.setState({
      episode: foundEpisode,
      thumbnail: this.state.podcast.thumbnail,
      hide: false
    })
  }

  handleLogin =(e, username, password) => {
    e.preventDefault()
    this.fetchUser(username, password)
    // .then(window.location.href = 'http://localhost:3001/dashboard')
  }

  handleFavoritesButton = (e) => {
    console.log("handleFavoritesButton", e, this.state.currentUser.id, this.state.podcast.id);
    fetch('http://localhost:3000/api/v1/playlists', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify({
        "name": "favorites",
        "user_id": this.state.currentUser.id,
        "podcast_id": this.state.podcast.id
      })
    })
    .then(() => this.fetchUser(this.state.currentUser.username, this.state.currentUser.password))
  }

  handleAudioPlayer = () => {
    this.setState({
      hide: !this.state.hide
    })
  }

  handleFavorites = () => {
    this.setState({
      favoriteShow: !this.state.favoriteShow
    })
  }

  handleLogout = () => {
    this.setState({
      currentUser: {}
    })
  }

  dashBoardComponents(){
    return(
      <div>
        <Naviebar handleLogout={this.handleLogout}/>
        <div className='row'>
          <div className='col s3'>
            <AllPodcast
              handleFavorites={this.handleFavorites}
              favoriteShow={this.state.favoriteShow}
              allPodcast={this.filterSearchBar()}
              handleSearch={this.handleSearch}
              search={this.state.search}
              handlePodcastMenuClick={this.handlePodcastMenuClick}/>
          </div>
          <div className="col s9">
            <SelectedPodcast
              addToPlaylist={this.addToPlaylist}
              handleFavoritesButton={this.handleFavoritesButton}
              allPodcast={this.state.allPodcast}
              podcast={this.state.podcast}
              show={this.state.show}
              handleEpisodeMenuClick={this.handleEpisodeMenuClick}
              hide={this.state.hide}
              thumbnail={this.state.thumbnail}
              episode={this.state.episode}/>
          </div>
        </div>
        <Footer hide={this.state.hide} thumbnail={this.state.thumbnail} podcast={this.state.podcast} episode={this.state.episode} />
      </div>
    )
  }



  dashBoardRoute(){
    if (this.state.loggedIn === true){
      return <Route path="/dashboard" render={() => this.dashBoardComponents()} />
    } else {
      return <Redirect to="/" />
    }
  }

  // loginRoute(){
  //   return <Login handleLogin={this.handleLogin}/>
  // }

  render() {
    console.log("App, State: ", this.state)
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={()=>(
            this.state.loggedIn ? (<Redirect to="/dashboard"/>) : (<Login handleLogin={this.handleLogin}/>)
          )} />
          {this.dashBoardRoute()}
        </div>
      </Router>
    )
  }
} // end of App class

export default App;
