import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Listnames from './components/listnames'

function App() {

  const [filter,setFilter] = useState("")
  const [countrydata,SetCountryData] = useState([])

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
  

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => SetCountryData(response.data))
  },[])

  return (
    <div>
      <input onChange={handleFilterChange}></input><br/>
      <Listnames countrydata={countrydata} filter={filter} SetFilter={setFilter}/>
    </div>
  );
}

export default App;
