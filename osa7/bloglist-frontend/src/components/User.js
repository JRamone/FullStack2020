import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const User = () => {
  const id = useParams().id
  const users = useSelector(state => state.users)
  const user = users.find(user => user.id === id)

  if (!user){
    return null
  }
  return (
    <>
      <h1>
        {user.name}
      </h1>
      <h2>Added blogs</h2>
      <ul>
        {user.blogs.map(blog => <li key = {blog.id}>{blog.title}</li>)}
      </ul>
    </>
  )
}

export default User