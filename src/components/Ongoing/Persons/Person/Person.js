import React, { Component } from 'react'
import classes from './Person.module.css';
// import Aux from '../../../../hoc/Auxiliar';
import WithClass from '../../../../hoc/WithClass';

class Person extends Component {
  render() {
    return (
      // <Aux>
      // <React.Fragment>
      <WithClass classes={classes.Person}>
      {/* <div className={classes.Person}> */}
        <p>This is {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed(this.props.index)} value={this.props.name} />
      {/* </div> */}
      {/* </Aux> */}
      {/* </React.Fragment> */}
      </WithClass>
    )
  }
}

export default Person
