import React,{useState} from 'react'
import blogService from '../services/blogs'
const Blog = ({ blog }) => {

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

  const normalview = {...blogStyle, display : showFullInformation ? 'none' : ''}
  const fullview = {...blogStyle, display : showFullInformation ? '' : 'none'}

  const handleLike = async (event) => {
    const blogWithAddedLike = {...blog, likes : blog.likes + 1}
    await blogService.likeABlog(blogWithAddedLike)
    //KAIKKI OK !  blogs tila pitää päivittää.. viitteellä?
  }

  return (
    <>
      <div style = {normalview}>
        {blog.title} {blog.author}<button key={blog.id} onClick = {toggleShowFullInformation}>Show</button> 
      </div>
      <div style = {fullview}>
        <p>Author : {blog.author} <button key={blog.id} onClick = {toggleShowFullInformation}>Hide</button></p>
        <p>Title : {blog.title}</p>
        <p>Url : {blog.url}</p>
        <p>Likes : {blog.likes} <button onClick={handleLike}>like</button></p>
        <p>User : {blog.user.name}</p>
         
      </div>
    </>
  )
}

export default Blog
