import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // 1st one
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // No longer supported
  // componentWillReceiveProps() {
  //   console.log('[Persons.js] componentWillReceiveProps');
  // }

  // No longer supported
  // componentWillUpdate() {
  //   console.log('[Persons.js] componentWillUpdate');
  // }

  // 2nd one
  shouldComponentUpdate(nextProps, nextState) {
    // NOTE: extending PureComponent instead of Component checks every property in the background before upgrading
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  // 3rd one
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  // 4th one
  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map((person, index) =>
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        index={index}
        key={index}
        changed={(event) => this.props.changed(event, index)}
      />
    );
  }
}

export default Persons
