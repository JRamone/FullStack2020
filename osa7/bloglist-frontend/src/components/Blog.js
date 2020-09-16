import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { like, deleteblog,comment } from '../reducers/blogsReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useHistory, useParams } from 'react-router-dom'

const Blog = () => {

  const [commentfield,setCommentfield] = useState('')

  const history = useHistory()
  const id = useParams().id
  const blogs = useSelector(state => state.blogs)
  const blog = blogs.find(blog => blog.id === id)

  const dispatch = useDispatch()

  const handleLike = () => {
    dispatch(like(blog))
    dispatch(setNotification(`liked ${blog.title}`))
  }

  const handleDelete = async() => {
    const ok = window.confirm(`You really wanna delete ${blog.title}?`)
    if (ok){
      dispatch(deleteblog(blog))
      dispatch(setNotification(`deleted ${blog.title}`))
      history.push('/')
    }
  }

  const showDeleteButton = () => {
    const loggedUser = JSON.parse(window.localStorage.getItem('LoggedUser'))
    if(blog.user.username === loggedUser.username){
      return <button value = {blog.id} onClick = {handleDelete}>delete this blog</button>
    }
    return null
  }
  const handleComment = () => {
    dispatch(comment(blog,commentfield))
  }


  if (!blog){
    return null
  }
  return (
    <>
      <div>
        <p>Author : {blog.author}</p>
        <p>Title : {blog.title}</p>
        <p>Url : <a href="https://www.google.com">{blog.url}</a></p>
        <p>Likes : {blog.likes} <button value={blog.id} onClick={handleLike}>like</button></p>
        <p>User : {blog.user.username} {showDeleteButton()}</p>
        <p>Comments : </p>
        <ul>
          {blog.comments.map(comment => <li key={comment}>{comment}</li>)}
        </ul>
        <input type ='text' onChange={({ target }) => setCommentfield(target.value)}></input>
        <button onClick={handleComment}>add comment</button>
      </div>
    </>
  )
}

export default Blog
