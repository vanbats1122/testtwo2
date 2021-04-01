import React from 'react'
import UserDetail from './UserDetail'

function UserList({users, handleTagTerm}) {
    return (
        <ul>
            {users?.map(user => (
                <UserDetail user={user} handleTagTerm={handleTagTerm} />
            ))}
        </ul>
    )
}

export default UserList
