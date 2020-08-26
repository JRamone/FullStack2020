import React from 'react'

const Button = ({text,onClick}) => {

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
  <button style={buttonStyle} onClick={onClick}type="submit">{text}</button>
  )
}

export default Button
