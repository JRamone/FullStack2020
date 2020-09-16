import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render,fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

const user = {
  name: 'pekka',
  username: 'Testauspekka'
}

window.localStorage.setItem('LoggedUser', JSON.stringify(user))

const blog = {
  title : 'testaus123otsikko',
  author :'Testauspekka',
  url : 'testausurl',
  user : {
    username : 'pekka',
    name : 'Testauspekka'
  }
}
describe('rendering', () => {

  test('title is rendered by default', () => {

    const component = render(
      <Blog blog={blog}/>
    )

    const normalview = component.getByTestId('normalview')
    expect(normalview).toHaveTextContent('testaus123otsikko')
  })

  test('author is rendered by default', () => {

    const component = render(
      <Blog blog={blog}/>
    )

    const normalview = component.getByTestId('normalview')
    expect(normalview).toHaveTextContent('Testauspekka')
  })

  test('url not rendered by default', () => {

    const component = render(
      <Blog blog={blog}/>
    )

    const normalview = component.getByTestId('normalview')
    expect(normalview).not.toHaveTextContent('testausurl')
  })
  test('likes not rendered by default', () => {

    const component = render(
      <Blog blog={blog}/>
    )

    const normalview = component.getByTestId('normalview')
    expect(normalview).not.toHaveTextContent('likes')
  })

})

describe('Clicking' , () => {
  test('Clicking the button calls event handler once', async() => {

    let mockFunction = jest.fn()

    const component = render(
      <Blog blog={blog}/>
    )

    const button = component.getByText('Show')

    fireEvent.click(button)
    expect(mockFunction.mock.calls).toHaveLength(1)
  })
})