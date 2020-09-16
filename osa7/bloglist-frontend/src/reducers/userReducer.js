import loginService from '../services/loginService'
import blogsService from '../services/blogs'


const userReducer = (state = null, action) => {
  switch(action.type){
  case('LOGIN'):
    return action.data
  case('LOGOUT'):
    return null
  default :
    return state
  }
}

export const login = (user) => {
  return async dispatch => {
    const response = await loginService.login(user)
    window.localStorage.setItem('LoggedUser', JSON.stringify(response))
    blogsService.setToken(response.token)
    dispatch({ type: 'LOGIN', data : user })
  }
}

export const initializeUser = () => {
  return async dispatch => {
    const userJSON = window.localStorage.getItem('LoggedUser')
    if (userJSON) {
      const user = JSON.parse(userJSON)
      blogsService.setToken(user.token)
      dispatch({ type : 'LOGIN' , data : user })
    }
  }
}

export const logout = () => {
  window.localStorage.clear()
  blogsService.setToken(null)
  return {
    type : 'LOGOUT',
    data : null
  }
}


export default userReducer