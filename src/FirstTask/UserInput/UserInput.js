import React from 'react'
import Radium from 'radium'
import './UserInput.css'

function UserInput(props) {
  const style = {
    padding: '18px 0 18px 0'
  };
  const dinamicButonStyle = {
    backgroundColor: 'green',
    color: 'white',
    margin: '5px',
    font: 'inherit',
    border: '1px solid white',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };
  const butonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    margin: '5px',
    font: 'inherit',
    border: '1px solid white',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightblue',
      color: 'black'
    }
  };
  let text = 'Show';
  if (props.hidden) {
    text = 'Hide';
    dinamicButonStyle.backgroundColor = 'red';
    dinamicButonStyle[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }
  return (
    <div style={style}>
      <input className='UserInput' type="text" onChange={props.changed(props.position)} value={props.name} />
      <button style={dinamicButonStyle} key='0' className='UserInput' onClick={props.hideShow}>{text}</button>
      <button style={butonStyle} key='1' className='UserInput' onClick={props.deleteItem}>Delete</button>
    </div>
  )
}

export default Radium(UserInput)
