import React from 'react'

import Album from './album-songs-component/Album'

const SelectedUserAlbums = ({ userSelected, selectAlbum, showDropdown, toggleDropdownMenu }) => {

    return(
        <div className="users-albums">
            <button onClick={() => toggleDropdownMenu()} className="dropdown-btn" >Select an Album...</button>
            <div className="dropdown-content">
                {showDropdown&&
                    userSelected.albums.map(album =>
                        <Album
                            key={album.id}
                            id={album.id}
                            title={album.title}
                            selectAlbum={selectAlbum}
                            toggleDropdownMenu={toggleDropdownMenu}
                        />
                    )
                }
            </div>
        </div>
    )
}
export default SelectedUserAlbums