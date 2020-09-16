import React, { useEffect } from 'react'
import Loginform from './components/Loginform'
import Welcomeform from './components/Welcomeform.js'
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


const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
  },[dispatch])

  return (
    <Container>
      <Router>
        <div>
          <Notification/>
          {user === null
            ? <>
              <Loginform />
            </>
            : <>
              <AppBar position='static'>
                <Toolbar>
                  <Button color='inherit' component={Link} to='/'>home</Button>
                  <Button color='inherit' component={Link} to='/users'>users</Button>
                  <Button color='inherit' component={Link} to='/blogs'>blogs</Button>
                  <Welcomeform />
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
                  <h1>Awesome stuff</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dui quis neque vulputate lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mattis, ligula quis vestibulum convallis, neque risus venenatis odio, eu fringilla neque lacus nec erat. Sed et nisl congue, commodo nibh ac, lobortis leo. Donec molestie mi tincidunt nunc pretium lacinia. Ut sagittis blandit ligula sed dapibus. Donec vitae orci sed quam dictum bibendum. Sed et maximus ex. Aenean pretium aliquet nisi, vel tincidunt massa volutpat semper. Nam sodales dui eget sagittis gravida. Maecenas ac scelerisque sem, et tempus tortor.</p>
                  <p>Vestibulum eu justo hendrerit, pulvinar orci ut, rutrum enim. Aenean blandit congue convallis. Phasellus id felis nec diam blandit tempor. Mauris sit amet felis sit amet felis lacinia congue. Praesent bibendum dignissim felis non vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum nec ante a eleifend. Donec tristique facilisis urna, vel efficitur lorem finibus eget. Donec id justo magna.</p>
                  <p>Nunc pellentesque augue vel ligula condimentum, nec sollicitudin massa fermentum. Nullam blandit orci neque, quis tempor elit semper eget. Aliquam lacinia urna quis neque tempor vulputate. Nam vel lacus a mi consectetur maximus. Maecenas nec erat aliquam, imperdiet turpis at, efficitur nibh. Mauris aliquam lectus ultrices mi ullamcorper varius. Vestibulum gravida, ligula quis luctus varius, eros tellus pellentesque eros, sit amet cursus nunc velit in augue.</p>
                </Route>
              </Switch>
            </>}
        </div>
      </Router>
    </Container>
  )
}

export default App