import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUsers } from '../reducers/usersReducer'
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import User from './User'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead
} from '@material-ui/core'


const Users = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeUsers())
  },[dispatch])

  const users = useSelector(state => state.users)
  if (!users){
    return null
  }
  users.sort((a,b) => b.blogs.length - a.blogs.length)
  return (
    <Router>
      <Switch>
        <Route path='/users/:id'>
          <User/>
        </Route>
        <Route path = '/'>
          <h1>Users</h1>
          <TableContainer component = {Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>Blogs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user =>
                  <TableRow key={user.id}>
                    <TableCell>
                      <Link to={`/users/${user.id}`}>
                        {user.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {user.blogs.length}
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Route>
      </Switch>
    </Router>
  )
}

export default Users