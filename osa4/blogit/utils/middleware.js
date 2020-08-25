const logger = require('./logger')

const requestLogger = (request,response,next) => {
  logger.info(request.method, request.path, request.body)
  next()
}

const tokenExtractor = (request,response,next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')){
    request.token = authorization.substring(7)
  }
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
    logger.info(error.message, ': Missing too much stuff!')
    return
  }
  if (error.message.startsWith('E11000')){
    response.status(400).json('error : Username already exists')
    logger.info(error)
    return
  }

  if(error.name === 'JsonWebTokenError'){
    logger.info(error)
    return response.status(401).json({
      error : 'invalid token'
    })
  }

  logger.info(error)
  next()
}

module.exports = {
  requestLogger,
  errorHandler,
  tokenExtractor
}