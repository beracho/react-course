import React from 'react'
import styled from 'styled-components'

function Person(props) {
  const StyledDiv = styled.div`
    width: 60%;
    margin: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px) {
      .Person {
        width: 450px;
      }
    }`

  return (
    <StyledDiv>
      <p>This is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged(props.index)} value={props.name}/>
    </StyledDiv>
  )
}

export default Person
