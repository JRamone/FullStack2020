
import React from 'react'

const Message = ({type,message}) => {

    if (message == null){
        return null
    }
    const errorMessageStyle = {
        color : 'red',
        background : 'lightgrey',
        borderStyle : 'Solid',
        borderRadius : 5,
        padding : 10,
        marginBottom : 10, 
        fontStyle : 'italic',
        fontSize : 16
    }

    const successMessageStyle = {
        color : 'green',
        background : 'lightgrey',
        borderStyle : 'Solid',
        borderRadius : 5,
        padding : 10,
        marginBottom : 10, 
        fontStyle : 'italic',
        fontSize : 16
    }

    if (type === "success"){
        return (
            <p style={successMessageStyle}>
                {message}
            </p>
        )
    }
    if (type === "error"){
        return (
            <p style = {errorMessageStyle}>
                {message}
            </p>
        )
    }
    
}

export default Message