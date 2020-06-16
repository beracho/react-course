import React, { Component } from 'react'
import classes from './Person.module.css';

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p>This is {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed(this.props.index)} value={this.props.name} />
      </div>
    )
  }
}

export default Person
