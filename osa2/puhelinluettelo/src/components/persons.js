import React from 'react';

const Persons = ({persons,nameFilter,deleteButtonHandler}) => {
     
    return (
        <>
        {persons.filter((person) => person.name.toLowerCase().includes(nameFilter)).map((person) => <p key={person.name}>{person.name}  {person.number}
        <button id = {person.id} value={person.name} onClick={deleteButtonHandler}>delete</button>
        </p>)}
        </>
    )
}

export default Persons