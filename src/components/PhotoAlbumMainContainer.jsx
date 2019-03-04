import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import UserList from './UserList'
import UserAlbumsContainer from './UserAlbumsContainer'

class PhotoAlbumMainContainer extends Component {

  state = {
    users: [],
    albums: [],
    userSelected: null
  }

  componentDidMount() {
    this.getUsers()
      .then(data => this.setState({ users: data.map(user => new Object({ id: user.id, name: user.name })) }))
    this.getAlbums()
      .then(data => this.setState({ albums: data.map(album => new Object({ userId: album.userId, title: album.title})) }))
  }

  getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      return json
  }

  getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const json = await response.json()
    return json
} 

  // WORK ON BELOW:

  albumList = (userId) => {
    const array = this.state.albums.filter(album => album.userId === userId)
    const userAlbums = array.map(album => album.title)
    return userAlbums
  }

  selectUser = (userId) => {
    this.setState({ userSelected: userId }, () => console.log(userId))
  }

  render() {

    const { users } = this.state
    const { selectUser } = this

    return (
        <div className="photo-album-main-container">
            <Container>
                <UserList users={users} selectUser={selectUser} />
                {/* <UserAlbumsContainer user={this.state.userSelected} /> */}
            </Container>
        </div>
    )
  }
}
export default PhotoAlbumMainContainer;

/* TO DO LIST:

 - Remove the dropdown menu. Replace with container (like in battlr bots)
 - When a name is selected, the card appears with name above and albums shown below.
 - When an album is selected, card transforms into card grid with images of each song.


 To learn, re-do battlr bots lesson in learn.

*/