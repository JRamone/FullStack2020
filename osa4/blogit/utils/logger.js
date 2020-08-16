const info = (...params) => {
  console.log(...params)
}
const error = (...params) => {
  console.warn(...params)
}

module.exports = {
  info,
  error
}