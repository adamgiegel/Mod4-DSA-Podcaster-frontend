import React from 'react';
import EpisodeContainer from './EpisodeContainer'
import striptags from 'striptags'
import { Card } from 'react-materialize'

const SelectedPodcast = ({podcast, show, handleEpisodeMenuClick, lastEpisodeIndex, firstEpisodeIndex, addMoreEpisodes, backEpisodes, handleFavoritesButton}) => {

  const clickedPodcast =
  <Card>
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
  </Card>

  const defaultPodcast =
    <Card className="center">
      <h1>Welcome to DSA Podcaster</h1>
      <img src='https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif' alt=''/>
    </Card>

  // console.log(podcast)
  return(
    <div className="content">
    {show === true ? clickedPodcast : defaultPodcast}
    </div>
    )
} // End of SelectedPodcast component

export default SelectedPodcast
