import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: this.RandomAge() },
      { name: 'Jorge', age: this.RandomAge() },
      { name: 'Jie', age: this.RandomAge() },
    ]
  }
  
  SwitchNameHandler = () => {
    this.setState({persons: [
      { name: 'Maximilian', age: this.RandomAge() },
      { name: 'Jorge', age: this.RandomAge() },
      { name: 'Jie', age: this.RandomAge() },
    ]});
  }

  // RandomAge() {
  //   return Math.floor(Math.random() * 30) + 15;
  // }
  RandomAge = () => {
    return Math.floor(Math.random() * 30) + 15;
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Can we do this?</p>
        <button onClick={this.SwitchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App;
