// import React, { Component } from 'react'// rcc

// export default class Person extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

import React from 'react' // rfce

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person
