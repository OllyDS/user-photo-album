import React from 'react'
import { Table } from 'semantic-ui-react'

const User = ({ user, selectUser }) => {
    return(
        <Table.Row onClick={() => selectUser(user.id)}><Table.Cell>{user.name}</Table.Cell></Table.Row>
    )
}
export default User