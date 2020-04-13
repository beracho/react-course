import React, { Component } from 'react'
import Person from './Person/Person'
import './Ongoing.css'

class Ongoing extends Component {
    state = {
        persons: [
            { name: 'Ronald', age: 53 },
            { name: 'Judith', age: 30 },
            { name: 'Ramiro', age: 31 },
            { name: 'Omar', age: 28 },
        ]
    }
    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className='Ongoing'>
                <h1>My React App</h1>
                <p>Running safe and sound</p>
                <button style={buttonStyle}>Toggle Persons</button>
            </div>
        )
    }
}

export default Ongoing