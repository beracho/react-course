import React from 'react'
import './UserOutput.css'

function UserOutput(props) {
    return (
        <div className="UserOutput">
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
            <p>{props.description}</p>
        </div>
    )
}

export default UserOutput
