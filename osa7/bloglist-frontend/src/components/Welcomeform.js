import React from 'react'
import Button from '@material-ui/core/Button'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/userReducer'
import { useHistory } from 'react-router-dom'

const Welcomeform = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const history = useHistory()
  const handleLogOut = (event) => {
    event.preventDefault()
    dispatch(logout())
    dispatch(setNotification('Successfully logged out'))
    history.push('/')
  }

  return (
    <>
      <div>
        {user.name} logged in <Button color = 'inherit' id='logOutButton' onClick={handleLogOut} text='log out'>log out</Button>
      </div>
    </>
  )
}

export default Welcomeform