import React, { Component } from 'react'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './FirstTask.css';

class FirstTask extends Component {
  RandomAge = () => {
    return Math.floor(Math.random() * 30) + 15;
  }
  
  state = {
    persons: [
      {
        username: 'Jie',
        age: this.RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Vanesa',
        age: this.RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Pamela',
        age: this.RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Nicole',
        age: this.RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Nataly',
        age: this.RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }
    ]
  };

  NameChangedHandler = position => event => {
    let auxPersons = [...this.state.persons]
    auxPersons[position].username = event.target.value;
    this.setState({
      persons: auxPersons
    });
  }

  toggleContentHandler = (position) => {
    let auxPersons = [...this.state.persons]
    auxPersons[position].hidden = !this.state.persons[position].hidden;
    this.setState({
      persons: auxPersons
    });
  }

  deleteItem = (personIndex) => {
    const auxPersons = [...this.state.persons];
    auxPersons.splice(personIndex, 1);
    this.setState({
      persons: auxPersons
    });
  }

  render() {
    const style = {
      backgroundColor: '#454851',
      width: '25%',
      display: 'inline-block',
      font: 'inherit',
      border: '3px solid #fceff9',
      padding: '5px',
      margin: '16px',
      borderRadius: '10px',
      boxShadow: '5px 5px 5px #555'
    };

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];

    let items = (
      <div className="FirstTask">
        <h1>First Task</h1>
        <p className={classes}>It works like a charm</p>
        {this.state.persons.map((person, index) => {
          return <div style={style} key={index}>
            <UserInput
              name={person.username}
              changed={this.NameChangedHandler}
              hideShow={this.toggleContentHandler.bind(this, index)}
              deleteItem={this.deleteItem.bind(this, index)}
              hidden={person.hidden}
              position={index} />
            <UserOutput
              name={person.username}
              age={person.age}
              description={person.description}
              hide={person.hidden} />
          </div>
        })}
      </div>
    );

    return items;
  }
}

export default FirstTask;