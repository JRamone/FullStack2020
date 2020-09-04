import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteById } from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.includes(filter)))
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteById(anecdote.id))
    dispatch(setNotification(`You voted ${anecdote.content}`))
    setTimeout(() => {
      dispatch(setNotification(''))
    },5000)
  }

  return (
    <>
      {anecdotes
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}
export default AnecdoteList