import React from 'react'
import { Table } from 'semantic-ui-react'
import User from './User'

const UserList = ({ users, selectUser }) => {
    return(
        <div className="users-container">
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Users</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        users.map(user => 
                            <User key={user.id} user={user} selectUser={selectUser} />
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
export default UserList