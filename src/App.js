import React, { Component } from 'react';
import FirstTask from './FirstTask/FirstTask'
import SecondTask from './SecondTask/SecondTask'
import Ongoing from './Ongoing/Ongoing'
import './App.css';
class App extends Component {

  render() {
    return (
      <div>
        <Ongoing />
        <FirstTask />
        <SecondTask />
      </div>
    )
  }
}

export default App;
