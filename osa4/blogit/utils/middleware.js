const logger = require('./logger')

const requestLogger = (request,response,next) => {
  logger.info(request.method, request.path, request.body)
  next()
}

const errorHandler = (error,request,response,next) => {
  if (error.name === 'ValidationError') {
    response.status(400).json(error.name)
    logger.info(error.name)
    return
  }
  if (error.name === 'TypeError') {
    response.status(400).json(error.name)
    logger.info(error.name, ': Missing too much stuff!')
    return
  }
  if (error.message.startsWith('E11000')){
    response.status(400).json('error : Username already exists')
    logger.info(error)
    return
  }

  logger.info(error)
  next()
}

module.exports = {
  requestLogger,
  errorHandler,
}