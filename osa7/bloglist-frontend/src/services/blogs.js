import axios from 'axios'

const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlog = async(newBlog) => {
  const config = {
    headers : { authorization : token }
  }
  const response = await axios.post(baseUrl,newBlog,config)
  return response
}

const likeABlog = async (likedBlog) => {
  const response = await axios.put(`${baseUrl}/${likedBlog.id}`,likedBlog)
  return response
}

const commentABlog = async (commentedBlog) => {
  const response = await axios.post(`${baseUrl}/${commentedBlog.id}`,commentedBlog)
  return response
}

const deleteABlog = async (blogToDelete) => {
  const config = {
    headers : { authorization : token }
  }
  const response = await axios.delete(`${baseUrl}/${blogToDelete}`,config)
  return response
}


export default { getAll,setToken,createBlog, likeABlog, deleteABlog,commentABlog }