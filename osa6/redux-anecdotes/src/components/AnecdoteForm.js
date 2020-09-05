
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const AddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const noteToCreate = {
      content : content,
      votes : 0
    }
    dispatch(createAnecdote(noteToCreate))
    dispatch(setNotification(`created ${noteToCreate.content}`,5))    
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

export default AnecdoteForm

