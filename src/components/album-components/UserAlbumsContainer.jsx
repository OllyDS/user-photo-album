import React from 'react'

import SelectedUserName from './SelectedUserName'
import SelectedUserAlbums from './SelectedUserAlbums'
import SelectedAlbumSongs from './album-songs-component/SelectedAlbumSongs'

class UserAlbumsContainer extends React.Component {

    state = {
        showDropdown: false,
        showGrid: false
    }

    toggleDropdownMenu = () => {
        this.setState({ showDropdown: !this.state.showDropdown })
    }

    toggleSongsGrid = () => {
        this.setState({ showGrid: !this.state.showGrid })
    }

    render() {

        const { toggleDropdownMenu, toggleSongsGrid } = this
        const { showDropdown, showGrid } = this.state
        const { albumSelected, selectAlbum, userSelected } = this.props

        return(
            <div className="user-albums-container">
                <SelectedUserName userSelected={userSelected} /* DONE */ />
                <SelectedUserAlbums
                    userSelected={userSelected}
                    selectAlbum={selectAlbum}
                    showDropdown={showDropdown}
                    toggleDropdownMenu={toggleDropdownMenu}
                    /* DONE */ />
                <SelectedAlbumSongs
                    albumSelected={albumSelected}
                    toggleSongsGrid={toggleSongsGrid}
                    showGrid={showGrid}
                />
            </div>
        )
    }
}
export default UserAlbumsContainer

/* TO DO

    - Use the toggleSongsGrid and showGrid to remove and refresh the songs Grid when a user clicks on it.

*/