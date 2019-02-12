import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AllPodcast from './components/AllPodcast'
import AudioPlayer from './components/AudioPlayer'
import Navbar from './components/Navbar'
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
    firstIndex: 0,
    lastIndex: 10,
    show: false,
    episode: {},
    thumbnail: {},
    firstEpisodeIndex: 0,
    lastEpisodeIndex: 5,
    search: '',
    filter: [],
    currentUser: {},
    loggedIn: false
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
    return this.state.allPodcast.filter(podcast => podcast.title.toLowerCase().includes(this.state.search.toLowerCase()))
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
      thumbnail: this.state.podcast.thumbnail
    })
  }

  addMore = () => {
    this.setState({
      firstIndex: this.state.firstIndex + 1,
      lastIndex: this.state.lastIndex + 1
    })
  }

  addMoreEpisodes = () => {
    this.setState({
      firstEpisodeIndex: this.state.firstEpisodeIndex+ 1,
      lastEpisodeIndex: this.state.lastEpisodeIndex + 1
    })
  }

  backEpisodes = () => {
    this.setState({
      firstEpisodeIndex: this.state.firstEpisodeIndex - 1,
      lastEpisodeIndex: this.state.lastEpisodeIndex - 1
    })
  }

  back = () => {
    this.setState({
      firstIndex: this.state.firstIndex - 1,
      lastIndex: this.state.lastIndex - 1
    })
  }

  handleLogin =(e, username, password) => {
    e.preventDefault()
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
      loggedIn: true
    }))
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
  }

  dashBoardComponents(){
    return(
      <div>
        <Navbar />
        <div className='row'>
          <div className='col s3'>
            <AllPodcast
              addMore={this.addMore}
              back={this.back}
              firstIndex={this.state.firstIndex}
              lastIndex={this.state.lastIndex}
              allPodcast={this.filterSearchBar()}
              handleSearch={this.handleSearch}
              search={this.state.search}
              handlePodcastMenuClick={this.handlePodcastMenuClick}/>
          </div>
          <div className="col s9">
            <SelectedPodcast
              handleFavoritesButton={this.handleFavoritesButton}
              allPodcast={this.state.allPodcast}
              podcast={this.state.podcast}
              show={this.state.show}
              handleEpisodeMenuClick={this.handleEpisodeMenuClick}
              addMoreEpisodes={this.addMoreEpisodes}
              backEpisodes={this.backEpisodes}
              firstEpisodeIndex={this.state.firstEpisodeIndex}
              lastEpisodeIndex={this.state.lastEpisodeIndex}/>
            <AudioPlayer thumbnail={this.state.thumbnail} podcast={this.state.podcast} episode={this.state.episode} />
          </div>
        </div>
      </div>
    )
  }

  dashBoardRoute(){
    if (this.state.loggedIn === true){
      return <Route path="/dashboard" component={() => this.dashBoardComponents()} />
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
