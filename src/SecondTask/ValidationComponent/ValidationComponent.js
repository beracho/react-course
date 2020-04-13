import React from 'react'

function ValidationComponent(props) {
  let text = 'Text long enough';
  const textStyle = [];
  if (props.length < 5) {
    text = "Text too short";
    textStyle.push('red')
  }
  if (props.length < 3) {
    textStyle.push('bold')
  }
  return (
    <div className={textStyle.join(' ')}>
      {text}
    </div>
  )
}

export default ValidationComponent
