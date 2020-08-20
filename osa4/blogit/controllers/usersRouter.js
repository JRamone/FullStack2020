const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

usersRouter.post('/', async(request, response) => {

  const body = request.body
  if (!body.password || !body.username)
  {
    response.status(400).json('Missing password or username')
    return
  }

  if (body.password.length < 3 || body.username.length < 3){
    response.status(400).json('password or username too short')
    return
  }


  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username : body.username,
    name: body.name,
    passwordHash
  })

  const savedUser = await user.save()
  response.status(201).json(savedUser)
})

usersRouter.get('/' ,async(request,response) => {
  const users = await User.find({})
  response.status(200).json(users)
})

usersRouter.get('/:id' ,async(request,response) => {
  const user = await User.find(request.body.id)
  response.status(200).json(user)
})


module.exports = usersRouter