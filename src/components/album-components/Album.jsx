import React from 'react'

const Album = ({ id, title, selectAlbum }) => {
    return(
        <div className="album">
            <a onClick={() => selectAlbum(id)}>{title}</a>
        </div>
    )
}
export default Album