import React, { useEffect, useState } from 'react'

export default function NewUserInfo() {
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState(1)

  const userChange = (e) => {
    setUserId(e.target.value)
  }

  useEffect(() => {
    console.log('useEffect Runs')
    fetch('http://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
      })
    return () => {
      console.log('Clean Up!!!')
    }
  }, [userId])

  return (
    <div className='user'>
      <br />
      User Id:
      <input type='text' value={userId} onChange={userChange} />
      <br />
      Name: {user.name}
      <br />
      Username: {user.username}
      <br />
      Email: {user.email}
    </div>
  )
}
