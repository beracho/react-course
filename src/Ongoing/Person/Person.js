import React from 'react'
import classes from './Person.module.css';

function Person(props) {

  return (
    <div className={classes.Person}>
      <p>This is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged(props.index)} value={props.name}/>
    </div>
  )
}

export default Person
