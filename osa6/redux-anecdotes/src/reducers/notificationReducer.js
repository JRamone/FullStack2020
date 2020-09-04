const defaultNotification = "This is a default notification"

const reducer = (state = defaultNotification, action) => {
  switch(action.type){   
    case('SET'):
      return action.content
    default:
      return state
  }
}

export const setNotification = (notification) => {
  return {
    type : 'SET',
    content : notification
  }
}

export default reducer