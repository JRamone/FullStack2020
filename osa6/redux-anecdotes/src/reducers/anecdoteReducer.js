import blogService from "../services/blogService"

const reducer = (state = [], action) => {

  
  //console.log('state now: ', state)
  //console.log('action', action)
  
  switch(action.type){
    
    case('VOTE'):
      const AnecdoteToChange = state.find(anecdote => anecdote.id === action.data)
      const changedAnecdote = {
        ...AnecdoteToChange,
        votes : AnecdoteToChange.votes + 1
      }
      return state
        .map(anecdote => anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote)
        .sort((a1,a2) => a2.votes - a1.votes)

    case('CREATE_NEW'):
      return [...state, action.data]

    case('INITIALIZE'):
      return action.data

    default:
      return state
  }
}

export const voteById = (anecdote) => {
  return async dispatch => {
    await blogService.like(anecdote)
    dispatch({
      type : 'VOTE',
      data : anecdote.id
    })
  }
  
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await blogService.getAll()
    dispatch({
      type:'INITIALIZE',
      data: anecdotes
    })
  }
}


export const createAnecdote = (content) => {
  return async dispatch => {
    const response = await blogService.createNewAnecdote(content)
    dispatch({
        type : 'CREATE_NEW',
        data : response
    })
  }
  
  
}



export default reducer