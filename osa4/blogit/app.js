const logger = require('./utils/logger')
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
app.use('/api/blogs', blogsRouter)


module.exports = app