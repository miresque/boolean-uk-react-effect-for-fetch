import React from 'react'

function UsersListItem(props) {
  const { user, key } = props
  const avatarSRC = user.picture.medium
  // console.log('im here', user)
  return (
    <li id={key} className={user.gender === "male"?"bg-blue":"bg-pink"}>
        <img
            src={avatarSRC}
            alt={user.name.first + " " + user.name.last}
        />
        <h3>{user.name.title + " " + user.name.first + " " + user.name.last}</h3>
        <p>Email: {user.email}</p>
    </li>
  )
}

export default UsersListItem