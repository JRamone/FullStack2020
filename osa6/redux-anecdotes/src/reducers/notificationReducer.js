const defaultNotification = "This is a default notification"

const reducer = (state = defaultNotification, action) => {
  switch(action.type){   
    case('SET'):
      return action.content
    default:
      return state
  }
}

let timeoutID = undefined;

export const setNotification = (notification, time) => {

  if(timeoutID){
    clearTimeout(timeoutID)
    timeoutID = undefined
  }

  return async dispatch => {
    dispatch({type : 'SET', content : notification})
    timeoutID = (setTimeout(() => dispatch({type : 'SET', content : ''}),time*1000))
  }
}

export default reducer