import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const AlbumList = props => {
    return(
        <div className="user-albums-container">
            
            {
                this.props.user&&
                    <Dropdown placeholder='Albums...' fluid selection options={this.props.albums} />
            }
        </div>
    )
}
export default AlbumList