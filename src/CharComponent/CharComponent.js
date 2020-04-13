import React from 'react'
import './CharComponent.css'

function CharComponent(props) {
    return (
        <div className="CharComponent" onClick={props.deleteItem}>
            {props.item}
        </div>
    )
}

export default CharComponent
