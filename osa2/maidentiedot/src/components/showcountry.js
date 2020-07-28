import React from 'react';

const showcountry = ({country}) => {
    return (
        <>
            <h1>{country.name}</h1>
            <p>capital : {country.capital}</p>
            <p>population : {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <p>
                <img alt="IMG"src={country.flag} height="400" width="400"/>
            </p>
        </>
    )
}

export default showcountry;