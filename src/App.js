import React from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Can we do this?</p>
      <Person name="Max" age ={RandomAge()}/>
      <Person name="Manu" age ={RandomAge()}>Hobbies: Racing</Person>
      <Person name="Jie" age ={RandomAge()}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
}

const RandomAge = () => {
  return Math.floor(Math.random() * 30) + 15;
}

export default App;
