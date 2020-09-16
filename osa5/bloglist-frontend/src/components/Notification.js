import React from 'react'


const Notification = ({ message }) => {
  if (message === null){
    return null
  }

  const style = {
    fontSize : 50,
  }


  return (
    <div style = {style}>
      {message}
    </div>
  )
}

export default Notification