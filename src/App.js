import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: RandomAge() },
      { name: 'Jorge', age: RandomAge() },
      { name: 'Jie', age: RandomAge() },
    ]
  };
  
  SwitchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: RandomAge() },
        { name: 'Jorge', age: RandomAge() },
        { name: 'Jie', age: RandomAge() },
      ]
    });
  }

  NameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: RandomAge() },
        { name: 'Jorge', age: RandomAge() },
        { name: 'Jie', age: RandomAge() },
      ]
    });
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Can we do this?</p>
        <button onClick={this.SwitchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.NameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.SwitchNameHandler('Maximo')} 
        >My hobbies: Racing </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

const RandomAge = () => {
  return Math.floor(Math.random() * 30) + 15;
}

export default App;
