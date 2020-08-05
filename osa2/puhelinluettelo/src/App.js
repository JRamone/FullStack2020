import React, {useState, useEffect} from 'react';
import './App.css';
import Filter from './components/filter';
import Persons from './components/persons';
import PersonForm from './components/personform';
import personservice from './services/personservice';
import Message from './components/message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter,setNameFilter] = useState("");
  const [message,setMessage] = useState(null);
  const [messageType,setMessageType] = useState("success")
  
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }
  const deleteButtonHandler = (event) => {
    const name = event.target.value
    const id = event.target.id
    const ok = window.confirm(`Are you sure you want to delete ${name}`)
    if(ok){
      personservice
      .deletePerson(id)
      .then(update => {
        setPersons(persons.filter(person => person.id != id))
        setMessage(`${name} succesfully deleted`)
        setTimeout(() => {
        setMessage(null)
      },3000)
    })
    }  
  }

  useEffect(() => {
    personservice.getAll().then(persons => setPersons(persons))
  },[])
     
  return( 
    <div>
      <h2>Phonebook</h2>
      <Message  message={message} type = {messageType}/>
      <h3>Filter</h3>
      <Filter handleFilterChange={handleFilterChange} nameFilter={nameFilter}/>
      <h3>Add a New</h3>
      <PersonForm setMessageType={setMessageType} setMessage={setMessage} persons={persons} setPersons={setPersons}/>      
      <h3>Numbers</h3>
      <Persons deleteButtonHandler = {deleteButtonHandler} persons={persons} nameFilter={nameFilter.toLowerCase()}/>
    </div>
  )
}

export default App;
