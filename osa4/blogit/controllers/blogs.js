const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const logger = require('../utils/logger')
require('express-async-errors')


blogsRouter.get('/', async(request, response) => {
  const blogs = await Blog.find({}).populate('user',{ name : true, username : true, id : true })
  response.status(200).send(blogs.map(b => b.toJSON()))
})

blogsRouter.get('/:id', async(request, response) => {
  const blog = await Blog.findById(request.params.id)
  response.status(200).send(blog)
})

blogsRouter.post('/', async(request, response) => {

  const body = request.body
  const decodedToken = jwt.verify(request.token, process.env.TOKEN)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  if (!body.likes) body.likes=0
  if (!body.title && !body.author) throw TypeError
  body.user=user._id
  const blog = new Blog(body)
  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async(request, response) => {
  const blog = await Blog.findById(request.params.id)
  const decodedToken = jwt.verify(request.token, process.env.TOKEN)
  if (blog.user.toString() === decodedToken.id){
    await Blog.findByIdAndDelete(blog.id)
    return response.status(200).json(`Blog ${blog.id} succesfully deleted`)
  }
  response.status(401).json({ error : 'unauthorized operation' })
})

blogsRouter.put('/:id', async(request, response) => {
  const body = request.body
  const blog = {
    title : body.title,
    author :body.author,
    url : body.url,
    likes : body.likes,
  }
  await Blog.findByIdAndUpdate(request.params.id, blog)
  return response.status(200).json('success')
})

module.exports = blogsRouter

