import React from 'react'

import Song from './Song'

const SelectedAlbumSongs = ({ albumSelected }) => {
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

/* TO DO:

    - Selected Albums now render and save to State.
    - Create grid of images, with each child component rendering an image card.
    - Write up README.md

*/