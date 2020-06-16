import React, { Component } from 'react';
// import FirstTask from '../components/FirstTask/FirstTask'
// import SecondTask from '../components/SecondTask/SecondTask'
import Ongoing from '../components/Ongoing/Ongoing'
import './App.css';
class App extends Component {
  // First one to execute
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {};
  }
  
  // Second to execute
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] 2 getDerivedStateFromProps', props);
    return state;
  }
  
  // Fourth to execute
  componentDidMount() {
    console.log('[App.js] 4 componentDidMount');
  }
  
  // Third to execute
  render() {
    console.log('[App.js] 3 render');
    return (
      <div>
        <Ongoing appTittle={this.props.appTittle}/>
        {/* <FirstTask /> */}
        {/* <SecondTask /> */}
      </div>
    )
  }
}

export default App;
