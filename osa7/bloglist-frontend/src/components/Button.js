import React from 'react'

const Button = ({
  id,
  text,
  onClick,
  onSubmit
}) => {

  return (
    <button id={id} onSubmit={onSubmit} onClick={onClick}type="submit">{text}</button>
  )
}

export default Button
