import React, { Component } from 'react';
import FirstTask from '../components/FirstTask/FirstTask'
import SecondTask from '../components/SecondTask/SecondTask'
import Ongoing from '../components/Ongoing/Ongoing'
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
