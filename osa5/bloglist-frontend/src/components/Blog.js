import React,{ useState } from 'react'
import blogService from '../services/blogs'
const Blog = ({ blog,blogs,setBlogs }) => {

  const [showFullInformation,setShowFullInformation] = useState(false)

  const toggleShowFullInformation = () => {
    setShowFullInformation(!showFullInformation)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const normalview = { ...blogStyle, display : showFullInformation ? 'none' : '' }
  const fullview = { ...blogStyle, display : showFullInformation ? '' : 'none' }

  const handleLike = async () => {
    const blogWithAddedLike = { ...blog, likes : blog.likes + 1 }
    let updatedblogs = blogs.map(blog => blog.id === blogWithAddedLike.id ? blogWithAddedLike : blog)
    updatedblogs.sort((blog1,blog2) => blog2.likes - blog1.likes)
    setBlogs(updatedblogs)
    await blogService.likeABlog(blogWithAddedLike)
  }

  const handleDelete = async(event) => {
    const blogToDelete = event.target.value
    const ok = window.confirm(`You really wanna delete ${blog.title}?`)
    if (ok){
      await blogService.deleteABlog(blogToDelete)
      const updatedblogs = blogs.filter(blog => blog.id !== blogToDelete)
      setBlogs(updatedblogs)
    }
  }


  const showDeleteButton = (blog) => {
    const loggedUser = JSON.parse(window.localStorage.getItem('LoggedUser'))
    if(blog.user.username === loggedUser.username){
      return <button value = {blog.id} onClick = {handleDelete}>delete</button>
    }
    return null
  }


  return (
    <>
      <div data-testid='normalview' className='blog' style = {normalview}>
        {blog.title} {blog.author}<button key={blog.id} onClick = {toggleShowFullInformation}>Show</button>
      </div>
      <div style = {fullview}>
        <p>Author : {blog.author} <button key={blog.id} onClick = {toggleShowFullInformation}>Hide</button></p>
        <p>Title : {blog.title}</p>
        <p>Url : {blog.url}</p>
        <p>Likes : {blog.likes} <button onClick={handleLike}>like</button></p>
        <p>User : {blog.user.username}</p>
        {showDeleteButton(blog)}
      </div>
    </>
  )
}

export default Blog
