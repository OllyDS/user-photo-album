import React from 'react'

const SelectedUserName = ({ userSelected }) => {
    return(
        <div className="users-name">
            <h2>{userSelected.user.name}</h2>
        </div>
    )
}
export default SelectedUserName