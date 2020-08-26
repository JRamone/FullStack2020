import React,{useState} from 'react'
import Button from '../components/Button'
import blogsService from '../services/blogs'

const inputStyle = {
  backgroundColor : 'white',
  width : 200,
  height : 50,
  border : '2px solid black',
  borderRadius : 10,
  margin : 10,
  fontSize : 20,
  textIndent : 10
}

const Createform = ({blogs,setBlogs,setMessage}) => {

  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      const response = await blogsService.createBlog({title,author,url})
      const addedblog = blogs.concat(response.data)
      setBlogs(addedblog)
      setMessage(`added ${title} by ${author}`)
      setTimeout(() => {
        setMessage(null)
      }, 4000);
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
          <td><input onChange={({target}) => setTitle(target.value)} style={inputStyle}></input></td>
          <td><input onChange={({target}) => setAuthor(target.value)} style={inputStyle}></input></td>
          <td><input onChange={({target}) => setUrl(target.value)} style={inputStyle}></input></td>
          <td><Button onClick={handleCreate}text="create"/></td>
        </tr>
        </tbody>
      </table>
      
  </>
  )
}

export default Createform