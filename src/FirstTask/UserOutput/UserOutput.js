import React from 'react'
import './UserOutput.css'

function UserOutput(props) {
    let content = null;
    if(props.hide)
        content =(
            <div className="UserOutput">
                <p>My name is {props.name}</p>
                <p>I am {props.age} years old</p>
                <p>{props.description}</p>
            </div>
        )
    return content;
}

export default UserOutput
