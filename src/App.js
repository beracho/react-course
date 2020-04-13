import React, { Component } from 'react';
import FirstTask from './FirstTask/FirstTask'
import SecondTask from './SecondTask/SecondTask'
import './App.css';
class App extends Component {

  render () {
    return (
      <div>
        <FirstTask/>
        <SecondTask/>
      </div>
    )
  }
}

export default App;
