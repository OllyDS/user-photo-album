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

  async componentDidMount() {
    await this.getData('users')
        .then(data => this.setState({ users: data.map(user => new Object({ id: user.id, name: user.name })) }))
    await this.getData('albums')
        .then(data => this.setState({ albums: data.map(album => new Object({ userId: album.userId, title: album.title})) }))
  }

getData = async (query) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${query}`)
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
    const user = this.state.users.filter(user => user.id === userId)
    const albums = [...this.state.albums.filter(album => album.userId === userId)]
    const userInfo = new Object({ user: user[0], albums })
    this.setState({ userSelected: userInfo })
  }

  render() {

    const { users, userSelected } = this.state
    const { selectUser } = this

    return (
        <div className="photo-album-main-container">
            <Container>
                <UserList users={users} selectUser={selectUser} />
                {userSelected &&  <UserAlbumsContainer userSelected={userSelected} />}
               
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