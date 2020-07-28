import React from 'react';

const filter = ({eventhandler}) => {
    return (
        <>
        find countries 
        <input onChange={eventhandler}></input>
        </>
    )
}

export default filter;