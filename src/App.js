import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';
const App = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: RandomAge() },
        { name: 'Jorge', age: RandomAge() },
        { name: 'Jie', age: RandomAge() },
      ]
  });

  const [anotherState, setAnotherState] = useState('some other values');
  console.log(personsState);
  console.log(anotherState);
  
  const SwitchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: RandomAge() },
        { name: 'Jorge', age: RandomAge() },
        { name: 'Jie', age: RandomAge() },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Can we do this?</p>
      <button onClick={SwitchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

const RandomAge = () => {
  return Math.floor(Math.random() * 30) + 15;
}

export default App;
