const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/userModel')

const api = supertest(app)

const initialUsers = [
  {
    username : 'Uuseri',
    name: 'Ussi Ukko',
    password: 'salaisuus'
  },
  {
    username : 'PerttiErkki',
    name: 'Pertti Keinonen',
    password: 'kissatonkivoja'
  }
]

beforeEach(async() =>  {
  await User.deleteMany({})
  let testUser = new User(initialUsers[0])
  await testUser.save()
  testUser = new User(initialUsers[1])
  await testUser.save()
})

describe('Getting users : ', () => {

  test('Users are returned as JSON',async() => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('Initial database contains 2 users',async() => {
    const response = await api
      .get('/api/users')

    expect(response.body).toHaveLength(2)
  })

  test('Can get a single user', async() => {
    const allUsers = await api.get('/api/users')
    const testPerson = allUsers.body[0]

    const response = await api.get(`/api/users/${testPerson.id}`)
      .expect(200)
    expect(response.body.toString()).toContain(testPerson)
  })
})

describe('Adding new users : ', () => {

  test('Can add a new user' , async() => {
    const testPerson = {
      username : 'Postman',
      name : 'Patte',
      password : 'doggo'
    }
    const response = await api.post('/api/users').send(testPerson).expect(201)
    expect(response.body.toString()).toContain(testPerson)
  })

  test('Database usercount increments by one after adding new user' , async() => {
    const testPerson = {
      username : 'Postman123',
      name : 'Patte321',
      password : 'doggo2222'
    }
    await api.post('/api/users').send(testPerson)
    expect(await User.countDocuments({})).toBe(initialUsers.length + 1)
  })
})

describe('Malformed userdata errorhandling: ', () => {
  test('Get error when trying to add duplicate usernames', async() => {
    const testPerson = {
      username : 'dubwub',
      name : 'IAmDuplicate',
      password : 'Whatta'
    }

    await api.post('/api/users').send(testPerson).expect(201)
    const response = await api.post('/api/users').send(testPerson).expect(400)
    expect(response.body).toContain('error')
  })

  test('Duplicate users cannot be added into database', async() => {
    const testPerson = {
      username : 'dubwub',
      name : 'IAmDuplicate',
      password : 'Whatta'
    }

    await api.post('/api/users').send(testPerson)
    await api.post('/api/users').send(testPerson)
    expect(await User.countDocuments({})).toBe(initialUsers.length + 1)
  })

  test('Get error when request is missing username', async() => {
    const testPerson = {
      name : 'IAmDuplicate',
      password : 'Whatta'
    }

    const response = await api.post('/api/users').send(testPerson).expect(400)
    expect(response.body).toContain('username')
  })

  test('Get error when request is missing password', async() => {
    const testPerson = {
      username : 'dubwub',
      name : 'IAmDuplicate'
    }

    const response = await api.post('/api/users').send(testPerson).expect(400)
    expect(response.body).toContain('password')
  })

  test('Get error when username or password too short', async() => {
    const testPerson = {
      username : 'du',
      name : 'IAmDuplicate'
    }
    const testPerson1 = {
      username : 'duasdasd',
      name : 'IA'
    }

    let response = await api.post('/api/users').send(testPerson).expect(400)
    expect(response.body).toContain('username')
    response = await api.post('/api/users').send(testPerson1).expect(400)
    expect(response.body).toContain('password')
  })
})



afterAll(() => {
  mongoose.connection.close()
})