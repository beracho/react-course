import React, { Component } from 'react'
import Cockpit from '../Cockpit/Cockpit'
import Persons from './Persons/Persons'
import Classes from './Ongoing.module.css'

class Ongoing extends Component {
  state = {
    persons: [
      { name: 'Ronald', age: 53 },
      { name: 'Judith', age: 30 },
      { name: 'Ramiro', age: 31 },
      { name: 'Omar', age: 28 },
    ],
    hidden: false,
    changeCounter: 0,
    authenticated: false
  }

  nameChangeHandler = personIndex => event => {
    const newPersons = [...this.state.persons];
    newPersons[personIndex].name = event.target.value;
    this.setState((prevState, props) => {
      return {
        persons: newPersons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    const isHidden = !this.state.hidden;
    this.setState({
      hidden: isHidden
    })
  }

  loginHandler = () => {
    console.log("logging in");
    this.setState({ authenticated: true });
  }

  render() {
    let persons = null;
    if (!this.state.hidden) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      )
    }

    return (
      <div className={Classes.Ongoing}>
        <Cockpit
          tittle={this.props.appTittle}
          showPersons={this.state.showPersons}
          // persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        {persons}
      </div>
    )
  }
}

export default Ongoing