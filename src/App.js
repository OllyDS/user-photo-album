import React, { Component } from 'react'

import './App.css'
import PhotoAlbumMainContainer from './components/PhotoAlbumMainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <PhotoAlbumMainContainer />
        </div>
    );
  }
}
export default App;

/* TO DO LIST:

 - Remove the dropdown menu. Replace with container (like in battlr bots)
 - When a name is selected, the card appears with name above and albums shown below.
 - When an album is selected, card transforms into card grid with images of each song.


 To learn, re-do battlr bots lesson in learn.

*/