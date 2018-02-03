import React, { Component } from 'react';
import './TextInput.css';

const shouty = value =>
  value.toUpperCase();

class TextInput extends Component {
  static isEmpty = value =>
    value === '';

  static validate = value => value.toLowerCase() === 'neville'
    ? Promise.resolve(value)
    : Promise.reject('sorry, you\'re not the one');

  handleChange = e => {
    const { onUpdate } = this.props;
    const value = e.currentTarget.value;
    onUpdate(value);
  }

  render() {
    const {
      id,
      committed,
      onCommit: handleCommit,
      raw,
      required,
    } = this.props;
    return (
      <input
        className="TextInput"
        id={id}
        onBlur={handleCommit}
        onChange={this.handleChange}
        value={committed ? shouty(raw) : raw}
        required={required}
      />
    );
  }
}

export default TextInput;
