import React, { useEffect } from 'react'
import Loginform from './components/Loginform'
import Home from './components/Home'
import Blogs from './components/Blogs.js'
import Createform from './components/createForm'
import Notification from './components/Notification'
import Users from './components/Users'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs } from './reducers/blogsReducer'
import { initializeUser } from './reducers/userReducer'
import { BrowserRouter as Router,
  Switch,Route,Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Welcomeform from './components/Welcomeform'

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
  },[dispatch])


  const linkStyle =  {
    paddingLeft : 20,
    color : 'white',
    visited : 'white'
  }
  const containerStyle =  {
    padding : 80,
  }
  const footerStyle =  {
    position: 'fixed',
    top : 0,
    width: '100%',
    marginTop: '98vh',
  }
  return (
    <Container style={containerStyle}>
      <Router>
        <div>
          {user === null
            ? <>
              <Loginform />
            </>
            : <>
              <AppBar variant='outlined' position='absolute'>
                <Typography>
                  <a style={linkStyle} href='https://github.com/JRamone/FullStack2020'>
                    https://github.com/JRamone/FullStack2020
                  </a>
                  </Typography>
                <Toolbar>
                  <Grid
                    justify-content = 'left'
                    container
                  >
                    <Button color='inherit' component={Link} to='/'>home</Button>
                    <Button color='inherit' component={Link} to='/users'>users</Button>
                    <Button color='inherit' component={Link} to='/blogs'>blogs</Button>
                    <Notification/>
                  </Grid>
                  <Grid justify-content='end'>
                    <Welcomeform/>
                  </Grid>
                </Toolbar>
              </AppBar>
              <Switch>
                <Route path='/users'>
                  <Users/>
                </Route>
                <Route path='/blogs'>
                  <Createform />
                  <Blogs />
                </Route>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
            </>}
          <AppBar style={footerStyle}>
  
          </AppBar>
        </div>
      </Router>
    </Container>
  )
}

export default App