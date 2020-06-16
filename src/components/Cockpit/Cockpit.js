import React, { useEffect } from 'react';
import Classes from './Cockpit.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000)
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
    // Executes just the first execution
  }, []);
  // executes on this property's change
  // }, [props.persons]);

  let btnClass = '';
  if (!props.showPersons) {
    btnClass = Classes.Red;
  }

  return (
    <div className={Classes.cockpit}>
      <h1>{props.tittle}</h1>
      <p>Running safe and sound</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}

export default React.memo(Cockpit);