import React, {useState} from 'react'
import loginService from '../services/loginService'
import Button from '../components/Button'
import blogs from '../services/blogs'
import Togglable from '../components/Togglable'

const Loginform = ({
  setUser,
  setMessage
  }) => {

  const [username, setuserName] = useState("")
  const [password, setPassword] = useState("")

  

  const formStyle = {
    backgroundColor : 'lightgray',
    color:'black',
    height : 220,
    margin : 0
  }

  const inputStyle = {
    backgroundColor : 'white',
    width : 200,
    height : 50,
    border : 0,
    margin : 10,
    fontSize : 20,
    textIndent : 10
  }

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
    console.log(`Logging in username : ${username} with password ${password}`)
    try {      
        const user = await loginService.login({username,password,})
        window.localStorage.setItem('LoggedUser', JSON.stringify(user))
        blogs.setToken(user.token)
        setUser(user)
        setuserName('')
        setPassword('')
        setMessage("Great Success")    
        setTimeout(() => {
          setMessage(null)
        },4000)   
    } catch (error) {
      console.log(error)
      setMessage("Wrong Credentials")
        setTimeout(() => {
          setMessage(null)
        },4000)
    } 
  }

  return (
    <Togglable buttonLabel = 'show Log in'>
    <form style={formStyle}>
      <input style = {inputStyle} onChange={handleChange} placeholder = "username" type="text" id="username" name="username"></input><br></br>
      <input style = {inputStyle} onChange={handleChange} placeholder = "password" type="password" id="password" name="password"></input><br></br>
      <Button text="Log in" onClick = {handleSubmit}/>
    </form>
    </Togglable>
  )
}


export default Loginform