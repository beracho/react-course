import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
  return <Person
    click={() => props.clicked(index)}
    name={person.name}
    age={person.age}
    index={index}
    key={person.id}
    changed={(event) => props.changed(event)} />
});

export default persons
