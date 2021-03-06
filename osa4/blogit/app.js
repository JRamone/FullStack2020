const logger = require('./utils/logger')
const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')


mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex : true
})
  .then(() => {
    logger.info('Connected to database')
  })
  .catch((error) => {
    logger.info('Error connecting to database : ', error.message)
  })


app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if(process.env.NODE_ENV === 'test'){
  const testRouter = require('./controllers/testRouter')
  app.use('/api/test', testRouter)
}
console.log(process.env.NODE_ENV)
app.use(middleware.errorHandler)

module.exports = app