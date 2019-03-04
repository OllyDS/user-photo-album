import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import UserList from './user-components/UserList'
import UserAlbumsContainer from './album-components/UserAlbumsContainer'

class PhotoAlbumMainContainer extends Component {

  state = {
    users: [],
    albums: [],
    userSelected: null
  }

  async componentDidMount() {
    await this.getData('users')
      .then(data => this.setState({ users: data.map(user => ({ id: user.id, name: user.name })) }))
    await this.getData('albums')
      .then(data => this.setState({ albums: data.map(album => ({ id: album.id, userId: album.userId, title: album.title })) }))
    await this.getData('photos')
      .then(data => this.setState({ songs: data.map(song => ({ albumId: song.albumId, title: song.title, image: song.thumbnailUrl }))}))
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
    const userInfo = ({ user: user[0], albums })
    this.setState({ userSelected: userInfo })
  }

  render() {

    const { users, userSelected, songs } = this.state
    const { selectUser } = this

    return (
        <div className="photo-album-main-container">
            <Container>
                <UserList users={users} selectUser={selectUser} />
                {userSelected &&  <UserAlbumsContainer userSelected={userSelected} songs={songs} />}
               
            </Container>
        </div>
    )
  }
}
export default PhotoAlbumMainContainer;