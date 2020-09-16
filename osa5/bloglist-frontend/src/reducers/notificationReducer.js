

const notificationReducer = (state = '', action) => {
  switch(action.type) {
  case 'RESET':
    return ''
  case 'SET':
    return action.data
  default:
    return state
  }
}

export default notificationReducer