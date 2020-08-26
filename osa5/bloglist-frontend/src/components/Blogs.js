import React from 'react'
import Blog from '../components/Blog'

const Blogs = ({blogs,setBlogs}) => {

  return (
    <div>
    <h2>
      blogs
    </h2>
    {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
    </div>
  )
}

export default Blogs