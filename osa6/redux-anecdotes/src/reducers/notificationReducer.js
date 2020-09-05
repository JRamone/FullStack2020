const defaultNotification = "This is a default notification"

const reducer = (state = defaultNotification, action) => {
  switch(action.type){   
    case('SET'):
      return action.content
    default:
      return state
  }
}

export const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch({type : 'SET', content : notification})
    setTimeout(() => dispatch({type : 'SET', content : ''}),time*1000)
  }
}

export default reducer