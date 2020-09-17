import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom'
import Blog from './Blog'

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from '@material-ui/core'


const Blogs = () => {

  const blogs = useSelector(state => state.blogs.sort((blog1,blog2) => blog2.likes - blog1.likes))

  return (
    <Router>
      <Switch>
        <Route path='/blogs/:id'>
          <Blog/>
        </Route>
        <Route path='/blogs'>
          <h2> blogs</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Added by</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs.map(blog =>
                <TableRow key={blog.id}>
                  <TableCell><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></TableCell>
                  <TableCell>{blog.user.name}</TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </Route>
      </Switch>
    </Router>
  )
}

export default Blogs