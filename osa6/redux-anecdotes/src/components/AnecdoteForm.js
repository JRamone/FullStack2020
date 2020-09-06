
import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  
  const AddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const noteToCreate = {
      content : content,
      votes : 0
    }
    props.createAnecdote(noteToCreate)
    props.setNotification(`created ${noteToCreate.content}`,5)   
  }
  
  return (
    <>
    <h2>create new</h2>
      <form onSubmit = {AddAnecdote}>
        <div><input name = "anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}


const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)


export default connectedAnecdoteForm

