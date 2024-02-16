import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API + '/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
      })
  }, [])
  console.log('users', users);
  return (
    <div>
      Users
      {users.map(user =>
        <div key={user.id}>
          <li>
            {user.id} {user.name} {user.email}
          </li>
        </div>
      )}
    </div>
  )
}

export default App
