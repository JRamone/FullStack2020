import React, { useState } from 'react'
import { setNotification } from '../reducers/notificationReducer'
import { login } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import Notification from './Notification'

import {
  TextField,
  Button
} from '@material-ui/core'

const Loginform = () => {

  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()


  const handleChange = (event) => {
    if (event.target.name === 'username'){
      setuserName(event.target.value)
    }
    if (event.target.name === 'password'){
      setPassword(event.target.value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await dispatch(login({ username,password }))
      setuserName('')
      setPassword('')
      dispatch(setNotification('Successfully logged in'))
    } catch (error) {
      dispatch(setNotification('Wrong Credentials', 'error'))
    }
  }

  const padding = {
    padding : 20
  }
  const paddingtop = {
    paddingTop : 20
  }

  return (
    <div style= {padding}>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField onChange={handleChange} label = "username" id="username" name="username"></TextField>
        </div>
        <div>
          <TextField onChange={handleChange} label = "password" type="password" id="password" name="password"></TextField>
        </div>
        <div style= {paddingtop}>
          <Button type ='submit' variant = 'contained' color = 'primary' id="loginButton" text="Log in">Log in</Button>
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <h2>Testikäyttäjä </h2>
          <h3>Käyttäjätunnus : Testi</h3>
          <h3>Salasana : Testi123</h3>
        </div>
      </form>
    </div>
  )
}


export default Loginform