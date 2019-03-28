# Mod4-DSA-Podcaster

This React web app allows a user to search and listen to their favorite podcasts.

## Contents
- Libraries
- Installation
- Structure
- Components
- Future Development

## Libraries 
Mod4-DSA-Podcaster was built using create-react-app and comes with the dependencies therein. React is used for state management, and the file structure is arranged accordingly; see below. React handles essential component transitions, including displaying  the search, and log-in panels. Materialize manages the display. React Router handles component rendering and navigation.  ReactAudioPlayer handles the playing of podcast.

## Installation
To get started with Mod4-DSA-Podcaster, fork this repository and clone it to your hard drive. CD into the folder and run npm install and npm install --save react-audio-player. Once the dependencies have been installed, you can run npm start to get your app running. The locally-hosted version of the app will receive information from a Ruby on Rails backend. For more information about how the back-end is structured, visit the repository. 

## Structure
The top-level folder of Mod4-DSA-Podcaster includes a public folder, which holds the index.html file where the app is officially rendered by React, a src folder which holds the application itself, and then a few other files: the .gitignore, README, and package.json.

The src folder includes one main folder: components, which organizes the bulk of the app's logic.  index.js handles how the app is mounted into the index.html file in the top-level folder.

## Components
Mod4-DSA-Podcaster is composed of one main component and 4 main subcomponents:

### App
The app component renders the Login, NavieBar, AllPodcast, SelectedPodcast, and Footer.  It also holds the majority of state and the fetch request to the backend consisting of POST, DELETE, and database data retrieval.  The corresponding .css file in the app folder rules all styling within the app.

### NavieBar
This component uses the Navbar and NavItem from react-materialize.

### AllPodcast
The AllPodcast component renders the SearchForm component, which allows the user to search through podcasts. It also maps over all the podcasts and renders those to the page.

### Login 
The Login component holds state for a user to signup and login.  It also sends a POST fetch request to the backend for new user signup.  Lastly, it holds forms and form data. 

### SelectedPodcast
The SelectedPodcast component renders the information for a chosen podcast.  It also renders the EpisodeContainer.

### Footer
The Footer component is responsible for rendering the AudioPlayer component which in turn is responsible for playing the podcast using ReactAudioPlayer from react-audio-player. 

### Future Development
Some ideas for features to add in the future:
A comment feature so users can share comments about the podcast.
A suggestion feature so a user can make a suggestion to the podcast.
A form to submit new podcast.

### Built With:
- React
- AudioPlayer Library
- Materialize
- Ruby on Rails

Link to Demo...https://youtu.be/ZnW2Irtgz1A 

Contributors
Simon Lee
Damon Collins


