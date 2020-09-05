import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNewAnecdote = async(newAnecdote) => {
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const like = async(anecdote) => {
  const updatedAnecdote = {...anecdote, votes : anecdote.votes + 1}
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote)
  return response
}

export default {
  getAll,
  createNewAnecdote,
  like
}