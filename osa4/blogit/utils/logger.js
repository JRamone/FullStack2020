const info = (...params) => {
  if (process.env.NODE_ENV !== 'test'){
    console.log(...params)
  }
}
const error = (...params) => {
  console.warn(...params)
}

module.exports = {
  info,
  error
}