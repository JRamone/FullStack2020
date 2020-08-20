const lodash = require('lodash')


const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return lodash.sumBy(blogs, 'likes')
}

const favoriteBlog = (blogs) => {
  return lodash.maxBy(blogs, 'likes')
}

const mostBlogs = (blogs) => {
  const mostWritingAuthor = lodash.chain(blogs).countBy('author').toPairs().maxBy((item) => item[1]).value()
  return {
    author : mostWritingAuthor[0],
    blogs : mostWritingAuthor[1]
  }
}

const mostLikes = (blogs) => {
  return lodash
    .chain(blogs)
    .groupBy('author')
    .map((likes,key) => {
      return {
        'author': key,
        'likes' : lodash.sumBy(likes,'likes')
      }
    })
    .maxBy('likes')
    .value()
}



module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}