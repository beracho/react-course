import React from 'react'
import './UserInput.css'

function UserInput(props) {
    const style = {
      padding: '18px 0 18px 0'
    };
    let text = 'Show';
    if (props.hidden)
        text = 'Hide'
    return (
        <div style={style}>
            <input className='UserInput' type="text" onChange={props.changed(props.position)} value={props.name}/>
            <button className='UserInput' onClick={props.hideShow}>{text}</button>
            <button className='UserInput' onClick={props.deleteItem}>Delete</button>
        </div>
    )
}

export default UserInput
