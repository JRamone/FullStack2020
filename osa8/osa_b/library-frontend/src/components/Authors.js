  
import React, { useState } from 'react'
import {SET_BORNYEAR,ALL_AUTHORS} from '../queries'
import { useMutation } from '@apollo/client'
import Select from 'react-select'

const Authors = (props) => {

  const [name,setName] = useState('')
  const [born,setBorn] = useState(null)
  const [ editAuthor ] = useMutation(SET_BORNYEAR, {
    refetchQueries: [{query: ALL_AUTHORS}]
  })



  if (!props.show) {
    return null
  }

  const setBirthYear = (e) => {
    e.preventDefault();
    editAuthor({variables : { name,setBornTo : Number(born) } })
    setName('')
    setBorn(null)
  }
  const nimet = 
    props.authors.map(a => {
     return { value: a.name, label: a.name} 
    })
  
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {props.authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Set birthyear</h2>   
      <form onSubmit={setBirthYear}>
            <Select onChange={({value}) => setName(value)} options={nimet} />
            <div>born<input onChange={({target}) => setBorn(target.value)}></input></div>
            <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default Authors
