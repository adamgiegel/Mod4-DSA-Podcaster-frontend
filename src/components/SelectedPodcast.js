import React from 'react';
import EpisodeContainer from './EpisodeContainer'
import striptags from 'striptags'
import { Button, Card, Row, Col } from 'react-materialize'

const SelectedPodcast = ({podcast, show, favoriteShow, handleEpisodeMenuClick, lastEpisodeIndex, firstEpisodeIndex, addMoreEpisodes, backEpisodes, handleFavoritesButton, handleDeleteFavoritesButton}) => {

  const clickedPodcast =
  <Card className="topping">
    <Row>
      <Col s={3}>
        <img src={podcast.img_url} alt='' />
        {favoriteShow ? <Button className="blue lighten-2" onClick={() => handleDeleteFavoritesButton(podcast.id)}>Delete Favorites</Button>:<Button className="blue lighten-2" onClick={handleFavoritesButton}>Add Favorites</Button>}
      </Col>
      <Col s={6} m={6}>
        <h4>{podcast.title}</h4>
        <p>{striptags(podcast.description)}</p><br/>
        <p>Episodes: {podcast.num_episodes}</p>
        <p>Publisher: {podcast.publisher}</p>
        <p>RSS: {podcast.rss}</p>

      </Col>
    </Row>
    <div>
      {
        <EpisodeContainer
          handleEpisodeMenuClick={handleEpisodeMenuClick}
          episodes={podcast.episodes}/>
      }
    </div>
  </Card>

  const defaultPodcast =
    <Card className="center topping">
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
