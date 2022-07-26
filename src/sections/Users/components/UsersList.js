import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList(props) {
  const { users } = props
  return (
    <ul className="users-list">
        { users.map((user, i) => {
          return (
            <UsersListItem key={i} user={user} />
          )
        })}
    </ul>
  )
}

export default UsersList