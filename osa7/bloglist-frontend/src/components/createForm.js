import React,{ useState } from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogsReducer'

const Createform = () => {
  const dispatch = useDispatch()

  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      dispatch(createBlog({ title, author, url }))
      dispatch(setNotification(`added ${title} by ${author}`))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Create new</h1>
      <table>
        <tbody>
          <tr>
            <th>Title: </th>
            <th>Author: </th>
            <th>Url:</th>
          </tr>
          <tr>
            <td><input id='titleinput' onChange={({ target }) => setTitle(target.value)} ></input></td>
            <td><input id='authorinput' onChange={({ target }) => setAuthor(target.value)} ></input></td>
            <td><input id='urlinput' onChange={({ target }) => setUrl(target.value)} ></input></td>
            <td><Button id='blogsubmitbutton'onClick={handleCreate}>create</Button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Createform