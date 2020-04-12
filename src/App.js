import React, { Component } from 'react';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';
class App extends Component {
  state = {
    persons: [
      { 
        username: 'Jie',
        age: RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Vanesa',
        age: RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Pamela',
        age: RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Nicole',
        age: RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }, {
        username: 'Nataly',
        age: RandomAge(),
        description: 'I enjoy Videogames and Sports',
        hidden: true
      }
    ]
  };
  
  NameChangedHandler = position => event => {
    let auxPersons = [...this.state.persons]
    auxPersons[position].username = event.target.value;
    this.setState({
      persons:auxPersons
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

  render () {
    const style = {
      backgroundColor: '#eef5db',
      width: '25%',
      display: 'inline-block',
      font: 'inherit',
      border: '3px solid #1d3557',
      padding: '5px',
      margin: '16px',
      borderRadius: '10px',
      boxShadow: '5px 5px 5px #555'
    };
    
    let items = (
      <div className="App">
        {this.state.persons.map((person, index) => {
          return <div style={style} key={index}>
            <UserInput
              name={person.username}
              changed={this.NameChangedHandler}
              hideShow={this.toggleContentHandler.bind(this, index)}
              deleteItem={this.deleteItem.bind(this, index)}
              position={index}/>
            <UserOutput
              name={person.username}
              age={person.age}
              description={person.description}
              hide={person.hidden}/>
          </div>
        })}
        </div>
    );

    return items;
  }
}

const RandomAge = () => {
  return Math.floor(Math.random() * 30) + 15;
}

export default App;
