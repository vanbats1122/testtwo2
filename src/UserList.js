import React from 'react'
import UserDetail from './UserDetail'

function UserList({users}) {
    return (
        <ul>
            {users?.map(user => (
                <UserDetail user={user} />
            ))}
        </ul>
    )
}

export default UserList
