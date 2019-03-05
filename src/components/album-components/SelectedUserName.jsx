import React from 'react'

const SelectedUserName = ({ userSelected }) => {
    return(
        <div className="users-name">
            <h1>{userSelected.user.name}</h1>
        </div>
    )
}
export default SelectedUserName