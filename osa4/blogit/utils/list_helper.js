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
  const mostWritingAuthor = Object.entries(lodash.countBy(blogs, 'author')).reduce(([key1,val1],[key2,val2]) => val1 > val2 ? [key1,val1] : [key2,val2])
  return {
    author : mostWritingAuthor[0],
    blogs : mostWritingAuthor[1]
  }
}

const mostLikes = (blogs) => {
  let authorsAndLikes = new Object()
  blogs.forEach(blog => {
    authorsAndLikes[blog.author] ? authorsAndLikes[blog.author] += blog.likes : authorsAndLikes[blog.author] = blog.likes})
  authorsAndLikes = Object.entries(authorsAndLikes).reduce(([key1,val1],[key2,val2]) => val1 > val2 ? [key1,val1] : [key2,val2])
  return {
    author : authorsAndLikes[0],
    likes : authorsAndLikes[1]
  }
}



module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}