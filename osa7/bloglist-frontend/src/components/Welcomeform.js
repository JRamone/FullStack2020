import React from 'react'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/userReducer'

const Welcomeform = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLogOut = (event) => {
    event.preventDefault()
    dispatch(logout())
    dispatch(setNotification('Successfully logged out'))
  }


  return (
    <>
      {user.name} logged in
      <button id='logOutButton' onClick={handleLogOut} text='log out'>log out</button>
    </>
  )
}

export default Welcomeform