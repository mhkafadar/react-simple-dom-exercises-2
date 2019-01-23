import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {
    state = {
        text: null,
        textLength: 0,
    }

    textLengthHandler = (event) => {
        const text = event.target.value;
        this.setState({ text: text })
        this.setState({ textLength: text.length});
    }

    deleteLetterHandler = (charIndex) => {
        let text = this.state.text;
        const textArray = text.split('');
        textArray.splice(charIndex, 1);
        text = textArray.join('');
        this.setState({ text: text })
    }


  render() {
    const text = this.state.text;
    let textLength = this.state.textLength;
    let chars = null;

    if (textLength > 0) {
        const textArray = text.split('');

        chars = (
            <div>
                {textArray.map((letter, i) => {
                    return <Char
                        key = {i}
                        letter={letter}
                        clicked={() => this.deleteLetterHandler(i)}
                    />
                })}
            </div>
        )
    }

    return (
      <div className="App">
          <p>Input text length is: {textLength}</p>
          <input
              placeholder='Text'
              onChange={ this.textLengthHandler }
              value={text ? text : ''}  />
          <Validation validateText={textLength} />
          {chars}
      </div>
    );
  }
}

export default App;
