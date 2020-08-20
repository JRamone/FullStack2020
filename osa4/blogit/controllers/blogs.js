const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
require('express-async-errors')

blogsRouter.get('/', async(request, response) => {
  const blogs = await Blog.find({})
  response.status(200).send(blogs)
})

blogsRouter.get('/:id', async(request, response) => {
  const blog = await Blog.findById(request.params.id)
  response.status(200).send(blog)
})

blogsRouter.post('/', async(request, response) => {
  const blog = new Blog(request.body)
  if (!blog.likes) blog.likes=0
  if (!blog.title && !blog.author) throw TypeError
  await blog.save(blog)
  response.status(201).send(blog)
})

blogsRouter.delete('/:id', async(request, response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
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
  return response.status(204).end()
})

module.exports = blogsRouter

