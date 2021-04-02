import React from 'react';
import UserDetail from './UserDetail';

function UserList({users, handleTags}) {
    return (
        <ul>
            {users?.map(user => (
                <UserDetail user={user} handleTags={handleTags} tags={user.tags} />
            ))}
        </ul>
    )
}

export default UserList;
