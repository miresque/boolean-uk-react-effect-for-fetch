import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])
  const apiURL = "https://randomuser.me/api/?results=10"

  useEffect(() => {
    fetch(apiURL)
     .then(res => res.json())
     .then(data => {
        const { results } = data
        console.log('raw data', results)
        setUsers(results)
      })
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
