import React from 'react'

import Song from './Song'

const SelectedAlbumSongs = ({ albumSelected, showGrid }) => {
    return(
        <div>
            <div className="users-name">
            {
                albumSelected &&
                    <h4>{albumSelected.album[0].title}</h4>
            }
            </div>
            <div className="song-image-grid">
            {
                albumSelected &&
                    albumSelected.songs.map(song => <Song song={song} />)
            }
            </div>
        </div>
    )
}
export default SelectedAlbumSongs