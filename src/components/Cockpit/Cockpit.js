import React, { useEffect, useRef } from 'react';
import Classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000)
    toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(Cockpit);