import React from 'react';

const Filter = ({nameFilter,handleFilterChange}) => {
     
    return (
        <>
        <input value={nameFilter} onChange={handleFilterChange}></input>
        </>
    )
}

export default Filter