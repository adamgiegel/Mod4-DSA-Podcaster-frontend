import React from 'react';
import EpisodeContainer from './EpisodeContainer'
import striptags from 'striptags'

const SelectedPodcast = ({podcast, show, handleEpisodeMenuClick, lastEpisodeIndex, firstEpisodeIndex, addMoreEpisodes, backEpisodes, handleFavoritesButton}) => {

  const clickedPodcast =
  <div className="card-panel hoverable">
  <button className="waves-effect waves-light btn" onClick={handleFavoritesButton}>Add to Favorites</button>
    <h1>{podcast.title}</h1>
    <p>{striptags(podcast.description)}</p>
    <div>
      {
        <EpisodeContainer
          handleEpisodeMenuClick={handleEpisodeMenuClick}
          episodes={podcast.episodes}/>
      }
    </div>
  </div>

  const defaultPodcast =
    <div className="center">
      <h1>Welcome to DSA Podcaster</h1>
      <img src='https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif' alt=''/>
    </div>

  // console.log(podcast)
  return(
    show === true ? clickedPodcast : defaultPodcast

    )
} // End of SelectedPodcast component

export default SelectedPodcast
