import React from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Can we do this?</p>
      <Person/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
}

export default App;
