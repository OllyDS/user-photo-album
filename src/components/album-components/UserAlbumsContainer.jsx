import React from 'react'

import SelectedUserName from './SelectedUserName'
import SelectedUserAlbums from './SelectedUserAlbums'
import SelectedAlbumSongs from './SelectedAlbumSongs'

class UserAlbumsContainer extends React.Component {

    state = {
        albumSelected: null,
        showDropdown: false
    }

    selectAlbum = async (albumId) => {
        const album = this.props.albums.filter(album => album.id === albumId)
        const songs = [...this.props.songs.filter(song => song.albumId === albumId)]
        const albumInfo = ({ album, songs })
        this.setState({ albumSelected: albumInfo })
        // console.log('album info', albumInfo)
        await this.closeDropdownMenu()
    }

    openDropdownMenu = () => {
        this.setState({ showDropdown: true })
    }

    closeDropdownMenu = () => {
        this.setState({ showDropdown: false })
    }

    render() {

        const { selectAlbum, openDropdownMenu } = this
        const { albumSelected, showDropdown } = this.state
        const { userSelected } = this.props

        return(
            <div className="user-albums-container">
                <SelectedUserName userSelected={userSelected} /* DONE */ />
                <SelectedUserAlbums
                    userSelected={userSelected}
                    selectAlbum={selectAlbum}
                    showDropdown={showDropdown}
                    openDropdownMenu={openDropdownMenu}
                    /* DONE */ />
                <SelectedAlbumSongs albumSelected={albumSelected} />
            </div>
        )
    }
}
export default UserAlbumsContainer

/* TO DO

    - Create two more components, 1 - dropdown album list, 2 - albums song grid
    - For each album, map through, passing image component through individually (like userlist & user)
    - Tidy up with folders.

*/