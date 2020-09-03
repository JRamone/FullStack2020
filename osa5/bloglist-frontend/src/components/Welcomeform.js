import React from 'react'
import Button from '../components/Button'
import blog from '../services/blogs'

const Welcomeform = ({ setUser,user,setMessage }) => {

  const style = {
    border: 'black',
    backgroundColor : 'lightgray',
    height : 150,
    textAlign : 'center',
    padding : 50

  }

  const handleLogOut = (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
    blog.setToken(null)
    setMessage('logged out successfully')
    setTimeout(() => {
      setMessage(null)
    }, 4000)
  }


  return (
    <div style={style}>
      HEY THERE, {user.name}<br/>
      <Button id='logOutButton' onClick={handleLogOut} text='log out'/>
    </div>
  )
}

export default Welcomeform