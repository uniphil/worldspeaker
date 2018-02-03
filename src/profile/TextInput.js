import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  static isEmpty = value =>
    value === '';

  static validate = value =>
    Promise.resolve(value);

  handleChange = e => {
    const { onUpdate } = this.props;
    const value = e.currentTarget.value;
    onUpdate(value);
  }

  render() {
    const {
      id,
      onCommit: handleCommit,
      raw,
      required,
    } = this.props;
    return (
      <input
        className="TextInput"
        onBlur={handleCommit}
        onChange={this.handleChange}
        value={raw}
        required={required}
      />
    );
  }
}

export default TextInput;
