import React, { Component } from 'react';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './SecondTask.css';

class SecondTask extends Component {
  state = {
    inputText: ''
  }
  InputChangedHandler = event => {
    this.setState({
      inputText: event.target.value
    });
  }

  deleteItem = (charIndex) => {
    const newText = this.state.inputText.substring(0, charIndex) + this.state.inputText.substring(charIndex + 1);
    this.setState({
      inputText: newText
    });
  }

  render() {
    let characters = null;
    if (this.state.inputText.length > 0) {
      characters = (
        <div>
          {this.state.inputText.split('').map((singleChar, index) => {
            if (singleChar === ' ')
              singleChar = '.';
            return <CharComponent
              item={singleChar}
              key={index}
              deleteItem={() => this.deleteItem(index)} />
          })}
        </div>
      );
    }

    return (
      <div className="SecondTask">
        <input type="text" onChange={this.InputChangedHandler} value={this.state.inputText} />
        <ValidationComponent length={this.state.inputText.length} />
        <h2>{this.state.inputText.length}</h2>
        {characters}
      </div>);
  }
}

export default SecondTask;
