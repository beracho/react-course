import React from 'react'
import './UserInput.css'

function UserInput(props) {
    const style = {
      padding: '18px 0 0 0'
    };
    return (
        <div style={style}>
            <input className='UserInput' type="text" onChange={props.changed(props.position)} value={props.name}/>
        </div>
    )
}

export default UserInput
