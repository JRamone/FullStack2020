


const notificationReducer = (state = null, action) => {
  //console.log('reducer FIRES!')
  switch(action.type){
  case 'RESET':
    return null
  case 'SET':
    return action.data
  default:
    return state
  }
}

let timeoutID = undefined

export const setNotification = (message) => {
  if (timeoutID) {
    clearTimeout(timeoutID)
    timeoutID = undefined
  }
  return async dispatch => {
    dispatch({ type: 'SET', data : message })
    timeoutID = (setTimeout(() => dispatch(resetNotification()),4000))
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET',
    data : ''
  }
}


export default notificationReducer