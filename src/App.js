import React, { Component } from 'react';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';
class App extends Component {
  state = {
    persons: [
      { username: 'Jie', age: RandomAge(), description: 'I enjoy Videogames and Sports' },
      { username: 'Vanesa', age: RandomAge(), description: 'I enjoy Videogames and Sports' },
      { username: 'Pamela', age: RandomAge(), description: 'I enjoy Videogames and Sports' },
      { username: 'Nicole', age: RandomAge(), description: 'I enjoy Videogames and Sports' },
      { username: 'Nataly', age: RandomAge(), description: 'I enjoy Videogames and Sports' }
    ]
  };
  
  NameChangedHandler = position => event => {
    this.state.persons[position].username = event.target.value;
    this.setState({
      persons: this.state.persons
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

    return (
      <div className="App">
        <div style={style}>
          <UserInput
            name={this.state.persons[0].username}
            changed={this.NameChangedHandler}
            position='0'/>
          <UserOutput
            name={this.state.persons[0].username}
            age={this.state.persons[0].age}
            description={this.state.persons[0].description}/>
        </div>
        <div style={style}>
          <UserInput
            name={this.state.persons[1].username}
            changed={this.NameChangedHandler}
            position='1'/>
          <UserOutput
            name={this.state.persons[1].username}
            age={this.state.persons[1].age}
            description={this.state.persons[1].description}/>
        </div>
        <div style={style}>
          <UserInput
            name={this.state.persons[2].username}
            changed={this.NameChangedHandler}
            position='2'/>
          <UserOutput
            name={this.state.persons[2].username}
            age={this.state.persons[2].age}
            description={this.state.persons[2].description}/>
        </div>
        <div style={style}>
          <UserInput
            name={this.state.persons[3].username}
            changed={this.NameChangedHandler}
            position='3'/>
          <UserOutput
            name={this.state.persons[3].username}
            age={this.state.persons[3].age}
            description={this.state.persons[3].description}/>
        </div>
        <div style={style}>
          <UserInput
            name={this.state.persons[4].username}
            changed={this.NameChangedHandler}
            position='4'/>
          <UserOutput
            name={this.state.persons[4].username}
            age={this.state.persons[4].age}
            description={this.state.persons[4].description}/>
        </div>
      </div>
    );
  }
}

const RandomAge = () => {
  return Math.floor(Math.random() * 30) + 15;
}

export default App;
