import React, { useState, useEffect } from 'react'

import Loginform from './components/Loginform'
import Welcomeform from './components/Welcomeform.js'
import Blogs from './components/Blogs.js'
import Createform from './components/createForm'
import blogsService from './services/blogs'
import Notification from './components/Notification'

const App = () => {

  const [user,setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [message,setMessage] = useState(null)

  useEffect(() => {
    blogsService.getAll().then(blogs => {
      blogs.sort((blog1,blog2) => blog2.likes - blog1.likes)
      setBlogs(blogs)
    })
  },[])

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('LoggedUser')
    if (loggedUserJson){
      const user = JSON.parse(loggedUserJson)
      blogsService.setToken(user.token)
      setUser(user)
    }
  },[])

  return (
    <div>
      {user === null
        ? <><Loginform setMessage={setMessage} setUser={setUser}/><Notification message={message}/></>
        : <><Notification message={message}/>
          <Welcomeform setMessage={setMessage} setUser={setUser} user={user}/>
          <Createform setMessage = {setMessage} blogs={blogs} setBlogs={setBlogs}/>
          <Blogs blogs={blogs} setBlogs={setBlogs}/>
        </>}
    </div>
  )
}

export default App