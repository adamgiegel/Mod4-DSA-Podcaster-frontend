import React from 'react';
import EpisodeContainer from './EpisodeContainer'

const SelectedPodcast = ({podcast, show, handleEpisodeMenuClick, lastEpisodeIndex, firstEpisodeIndex, addMoreEpisodes, backEpisodes, handleFavoritesButton}) => {
  const clickedPodcast =
  <div className="card-panel hoverable">
  <button className="waves-effect waves-light btn" onClick={handleFavoritesButton}>Add to Favorites</button>
    <h1>{podcast.title}</h1>
    <p>{podcast.description}</p>
    <div>
      {
        <EpisodeContainer
          lastEpisodeIndex={lastEpisodeIndex}
          firstEpisodeIndex={firstEpisodeIndex}
          addMoreEpisodes={addMoreEpisodes}
          backEpisodes={backEpisodes}
          handleEpisodeMenuClick={handleEpisodeMenuClick}
          episodes={podcast.episodes}/>
      }
    </div>
  </div>

  const defaultPodcast =
    <div className="navbar">
      <h1>Hi</h1>
    </div>

  // console.log(podcast)
  return(
    show === true ? clickedPodcast : defaultPodcast

    )
} // End of SelectedPodcast component

export default SelectedPodcast
