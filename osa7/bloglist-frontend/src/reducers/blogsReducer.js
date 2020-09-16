import blogsService from '../services/blogs'

const blogsReducer = (state = [],action) => {
  switch(action.type){
  case 'INIT':
    return action.data
  case 'CREATE_NEW':
    return [...state, action.data]
  case 'LIKE':
    return state.map(blog => blog.id !== action.data.id ? blog : action.data)
  case 'DELETE':
    return state.filter(blog => blog.id !== action.data.id)
  case 'ADDCOMMENT':
    return state.map(blog => blog.id !== action.data.id ? blog : action.data)
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogsService.getAll()
    dispatch({
      type: 'INIT',
      data: blogs })
  }
}

export const createBlog = (blog) => {
  return async dispatch => {
    const response = await blogsService.createBlog(blog)
    dispatch({ type: 'CREATE_NEW',data: response.data })
  }
}

export const like = (blog) => {
  return async dispatch => {
    const likedBlog = { ...blog, likes : blog.likes + 1 }
    await blogsService.likeABlog(likedBlog)
    dispatch({ type: 'LIKE', data:likedBlog })
  }
}

export const comment = (blog, comment) => {
  return async dispatch => {
    const commentedBlog = { ...blog, comments : blog.comments.concat(comment) }
    await blogsService.commentABlog(commentedBlog)
    dispatch({ type: 'ADDCOMMENT', data : commentedBlog })
  }
}

export const deleteblog = (blog) => {
  return async dispatch => {
    await blogsService.deleteABlog(blog.id)
    dispatch({ type: 'DELETE', data:blog })
  }
}


export default blogsReducer