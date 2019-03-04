import React from 'react'

import Album from './Album'

const SelectedUserAlbums = ({ userSelected, selectAlbum, showDropdown, openDropdownMenu }) => {

    return(
        <div className="users-albums">
            <button onClick={() => openDropdownMenu()} className="dropdown-btn" >Select an Album...</button>
            <div className="dropdown-content">
                {showDropdown&& userSelected.albums.map(album => <Album key={album.id} id={album.id} title={album.title}  selectAlbum={selectAlbum} />)}
            </div>
        </div>
    )
}
export default SelectedUserAlbums