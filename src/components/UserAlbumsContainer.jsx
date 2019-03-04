import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import SelectedUser from './SelectedUser'

const UserAlbumsContainer = ({ userSelected }) => {
    return(
        <div className="user-albums-container">
            <SelectedUser userSelected={userSelected}/>
            {/* {
                userSelected&&
                    <Dropdown placeholder='Albums...' fluid selection options={this.props.albums} />
            } */}
        </div>
    )
}
export default UserAlbumsContainer

/* TO DO

    - Create two more components, 1 - dropdown album list, 2 - albums song grid
    - For each album, map through, passing image component through individually (like userlist & user)
    - Tidy up with folders.

*/