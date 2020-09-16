import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom'
import Blog from './Blog'

const Blogs = () => {

  const blogs = useSelector(state => state.blogs.sort((blog1,blog2) => blog2.likes - blog1.likes))

  return (
    <Router>
      <Switch>
        <Route path='/blogs/:id'>
          <Blog/>
        </Route>
        <Route path='/blogs'>
          <div>
            <h2>
              blogs
            </h2>
            {blogs.map(blog => <p key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></p>)}
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Blogs