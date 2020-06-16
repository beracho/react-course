import React from 'react';
import Classes from './Cockpit.css'

const cockpit = (props) => {
  let btnClass = '';
  if (!props.showPersons) {
    btnClass = Classes.Red;
  }

  return (
    <div className={Classes.cockpit}>
      <h1>My React App</h1>
      <p>Running safe and sound</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}

export default cockpit;