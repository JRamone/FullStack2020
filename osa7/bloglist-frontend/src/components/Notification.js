import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notification = () => {
  const message = useSelector(state => state.notification)
  if (message === null){
    return null
  }

  const style = {
    fontSize : 50,
  }


  return (
    <div style = {style}>
      <Alert severity='success'>
        {message}
      </Alert>
    </div>
  )
}

export default Notification