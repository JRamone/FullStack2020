import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
} 

const addPerson = (person) => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const deletePerson = (person) => {
    const request = axios.delete(`${baseUrl}/${person}`)
    return request.then(response => response.data)
}

const updatePerson =(person, newnumber) => {
    const request = axios.put(`${baseUrl}/${person}`,newnumber)
    return request.then(response => response.data)
}
    
export default {
    getAll,
    addPerson,
    deletePerson,
    updatePerson
}