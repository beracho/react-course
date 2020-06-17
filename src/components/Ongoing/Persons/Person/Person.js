import React, { Component } from 'react'
import PropTypes from 'prop-types';

import classes from './Person.module.css';
// import Aux from '../../../../hoc/Auxiliar';
import WithClass from '../../../../hoc/WithClass';
import AuthContext from '../../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus;
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      // <Aux>
      // <React.Fragment>
      <WithClass classes={classes.Person}>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        </AuthContext.Consumer>
        {/* <div className={classes.Person}> */}
        <p>This is {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          onChange={this.props.changed(this.props.index)}
          value={this.props.name}
        />
        {/* </div> */}
        {/* </Aux> */}
        {/* </React.Fragment> */}
      </WithClass>
    )
  }
}

Person.propTypes = {
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default Person
