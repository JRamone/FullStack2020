import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notification = () => {


  const message = useSelector(state => state.notification.message)
  const type = useSelector(state => state.notification.type)
  if (message === ''){
    return null
  }
  const style = {
    fontSize : 50,
  }

  return (
    <div style = {style}>
      <Alert severity= {type}>
        {message}
      </Alert>
    </div>
  )
}

export default Notification