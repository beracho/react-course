import React, { Component } from 'react'
import styled from 'styled-components'
import Person from './Person/Person'
import './Ongoing.css'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

class Ongoing extends Component {
  state = {
    persons: [
      { name: 'Ronald', age: 53 },
      { name: 'Judith', age: 30 },
      { name: 'Ramiro', age: 31 },
      { name: 'Omar', age: 28 },
    ],
    hidden: false
  }

  nameChangeHandler = personIndex => event => {
    const newPersons = [...this.state.persons];
    newPersons[personIndex].name = event.target.value;
    this.setState({
      persons: newPersons
    })
  }

  togglePersonsHandler = () => {
    const isHidden = !this.state.hidden;
    this.setState({
      hidden: isHidden
    })
  }
  render() {
    let persons = null;
    if (!this.state.hidden) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={index}
              index={index}
              name={person.name}
              age={person.age}
              nameChanged={this.nameChangeHandler} />
          })}
        </div>
      )
    }

    return (
      <div className='Ongoing'>
        <h1>My React App</h1>
        <p>Running safe and sound</p>
        <StyledButton alt={!this.state.hidden} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    )
  }
}

export default Ongoing