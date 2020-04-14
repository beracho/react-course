import React, { Component } from 'react'
import Person from './Person/Person'
import Classes from './Ongoing.module.css'

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
    let btnClass = '';
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

      btnClass = Classes.Red;
    }

    return (
      <div className={Classes.Ongoing}>
        <h1>My React App</h1>
        <p>Running safe and sound</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default Ongoing