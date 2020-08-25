const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const logInAndGetToken = async() => {
  const loggedPerson = await api
    .post('/api/login')
    .send({ username : 'Postman', password : 'doggo' })
  const token = 'bearer ' + loggedPerson.body.token

  return token
}

const initialBlogs = [
  {
    title: 'Api-testaus',
    author: 'Pekka',
    url: 'www.testi.fi',
    likes: 123,
    user: "5f44ceeca76a371ad70c74f2" 
  },
  {
    title: 'Dummyblogaus',
    author: 'Matti',
    url: 'www.harha.fi',
    likes: 5,
    user: "5f44ceeca76a371ad70c74f2"
  }
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()

})

describe('test GET',() => {

  test('blogs are returned as JSON',async() => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned',async() => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length)
  })

  test('property ID is defined',async() => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })
})

describe('test POST', () => {

  it('should respond 401 if no token in request', async() => {
    {
      const postTestBlog = {
        title : 'this is a post test blog',
        author : 'raab himfself',
        url : 'www.chilipää.fi',
        likes : 5,
      }
      let blogObject = new Blog(postTestBlog)

      await api
        .post('/api/blogs')
        .send(blogObject)
        .expect(401)
    }
  })

  test('Can add a blog', async() => {

    const postTestBlog = {
      title : 'this is a post test blog',
      author : 'raab himfself',
      url : 'www.chilipää.fi',
      likes : 5,
    }

    let blogObject = new Blog(postTestBlog)
    const token = await logInAndGetToken()
    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(blogObject)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api
      .get('/api/blogs')
      .expect(200)

    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(response.body.toString()).toContain(postTestBlog)

  })

  test('likes set to 0 if undefined', async() => {
    const token = await logInAndGetToken()
    const postTestBlogWithoutLikes = {
      title : 'this is a post test blog',
      author : 'raab himfself',
      url : 'www.chilipää.fi',
    }
    const blogObject = new Blog(postTestBlogWithoutLikes)
    const response = await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(blogObject)
      .expect(201)
    expect(response.body.likes).toBe(0)
  })

  test('responsestatus 400 if title or url missing', async() => {
    const token = await logInAndGetToken()
    const postTestBlogWithoutUrl = {
      title : 'this is a post without url',
      author : 'raab himfself',
    }
    const postTestBlogWithoutTitle = {
      author : 'author without a title.. hah!',
      url : 'www.chilipää.fi',
    }
    const blogObjectWithoutTitle = new Blog(postTestBlogWithoutTitle)
    const blogObjectWithoutUrl = new Blog(postTestBlogWithoutUrl)
    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(blogObjectWithoutTitle)
      .expect(400)
    await api
      .post('/api/blogs')
      .set('Authorization', token)
      .send(blogObjectWithoutUrl)
      .expect(400)
  })
})

describe('test DELETE', () => {

  test('Can delete a blog', async() => {
    const token = await logInAndGetToken()
    let response = await api.get('/api/blogs')
    const blogPostToDelete = response.body[0]
    await api
      .delete(`/api/blogs/${blogPostToDelete.id}`)
      .set('Authorization', token)
      .expect(200)
    response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length-1)
    expect(response.body).not.toContain(blogPostToDelete)
  })
})

describe('test PUT', () => {

  test('Can update a blog', async() => {
    const token = await logInAndGetToken()
    let response = await api.get('/api/blogs')
    const blogPostToUpdate = response.body[0]
    blogPostToUpdate.author = 'This is just a test to see if updating works!'
    await api.put(`/api/blogs/${blogPostToUpdate.id}`)
      .set('Authorization', token)
      .send(blogPostToUpdate)
      .expect(200)
    response = await api.get(`/api/blogs/${blogPostToUpdate.id}`)
    expect(response.body.author).toEqual('This is just a test to see if updating works!')
  })
})





afterAll(() => {
  mongoose.connection.close()
})