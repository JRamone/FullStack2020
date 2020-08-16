import React,{useState} from 'react';
import personservice from '../services/personservice';



const PersonForm = ({setMessage,setMessageType,persons,setPersons}) => {

  const [newName,setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber
      }
        
    if (persons.map((person) => person.name).includes(newName)){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const personToUpdate = persons.find(person => person.name === personObject.name)
        personservice
          .updatePerson(personToUpdate.id,{...personToUpdate, number : newNumber})
          .then(responsePerson => {
            setPersons(persons.map(person => person.id !== responsePerson.id ? person : responsePerson))
            setNewName("")
            setNewNumber("")
            setMessageType("success")
            setMessage(`${newName} succesfully updated`)
            setTimeout(() => {
              setMessage(null)
            }, 3000);
          })
          .catch(error => {
            setMessageType("error")
            setMessage(`${newName} is already deleted from the server.`)
            setTimeout(() => {
              setMessage(null)
            },3000);
            setNewName("")
            setNewNumber("")
            personservice.getAll().then(persons => setPersons(persons))
            return
          })
      }
    return
    }
    personservice
      .addPerson(personObject) 
      .then(personObject => {
        setMessageType("success")
        setPersons(persons.concat(personObject))
        setNewName("")
        setNewNumber("")
        setMessage(`${personObject.name} succesfully added`)
        setTimeout(() => {
          setMessage(null)
        }, 3000);
      })
      .catch(error => {
        const message = error.response.data.error
        setMessageType("error")
        setMessage(message)
        setTimeout(() => {
        setMessage(null)
        },3000);
        setNewName("")
        setNewNumber("")
      })
  }

  return (
    <>
      <form onSubmit= {addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br></br>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
    )
}

export default PersonForm