import React from 'react';
import Showcountry from './showcountry'
import Showweather from './showweather'

const listnames = ({countrydata,filter,SetFilter}) => {

    const filteredCountries = 
        countrydata.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    const handleClick = (event) => {
        SetFilter(event.target.value)
    }
    
    

    if (filteredCountries.length > 10) {
        return (
            <>
                Too many countries! Specify a better filter
            </>
        )
    } else  if (filteredCountries.length === 1){
        return (
            <>
            <Showcountry country={filteredCountries[0]}/>
            <Showweather country={filteredCountries[0]}/>
            </>
        )
    } else {
        return (
            <>
                {filteredCountries.map(country => <p key={country.name} >{country.name}
                <button value={country.name} onClick={handleClick}>Show</button>
                </p>)}
            </>
        )
    }
    
}

export default listnames;