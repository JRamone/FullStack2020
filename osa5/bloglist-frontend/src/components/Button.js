import React from 'react'

const Button = ({
  id,
  text,
  onClick,
  onSubmit
}) => {

  const buttonStyle = {
    backgroundColor : 'forestgreen',
    borderRadius : 10,
    width : 200,
    height : 50,
    border : 0,
    fontSize : '30px',
    fontFamily : 'Impact',
    margin : 10,
    color : 'ghostwhite'
  }

  return (
    <button id={id} style={buttonStyle} onSubmit={onSubmit} onClick={onClick}type="submit">{text}</button>
  )
}

export default Button
