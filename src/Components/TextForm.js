import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UpperCase was clicked' + ' ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Coverted to upperCase', 'Sucess');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Coverted to LowerCase', 'Sucess');
  };

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert('Coverted to Reverse', 'Sucess');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Clear Text', 'Sucess');
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const copy = () => {
    let text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied', 'Sucess');
  };

  const space = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));
    props.showAlert('Text has been trim', 'Sucess');
  };

  const handleOnChange = (event) => {
    // console.log('on Change');
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Covert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2"
          onClick={handleLowClick}
        >
          Covert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2"
          onClick={handleReverseClick}
        >
          Covert to Reverse
        </button>
        <button
          disabled={text.length === 0}
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2"
          onClick={space}
        >
          Remove-Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mx-2"
          onClick={copy}
        >
          Copy
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(' ').filter((element) => {
              return element.length !== 0;
            }).length}{' '}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing To Priview '}</p>
      </div>
    </>
  );
}
