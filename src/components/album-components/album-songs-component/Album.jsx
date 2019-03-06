import React from 'react'

const Album = ({ id, title, selectAlbum, toggleDropdownMenu }) => {
    return(
        <div className="album">
            <a onClick={ () => {
                selectAlbum(id)
                toggleDropdownMenu()
            }}>{title}</a>
        </div>
    )
}
export default Album