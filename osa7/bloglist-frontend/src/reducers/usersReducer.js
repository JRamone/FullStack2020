
import usersService from '../services/usersService'


const usersReducer = (state = null, action) => {
  switch(action.type){
  case ('INITIALIZE'):
    return action.data
  default:
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const response = await usersService.getAll()
    dispatch({ type : 'INITIALIZE', data : response })
  }
}



export default usersReducer