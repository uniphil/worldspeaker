import React, { Component } from 'react';
import './Field.css';
import { INVALID, Input } from 'form-mechanics';

import { injectFieldInfo } from 'form-mechanics';

class Field extends Component {
  render() {
    const { children, field } = this.props;
    return (
      <div className="Field">
        <label htmlFor={field.htmlId}>
          {field.required && '*'}
          {children}
        </label>
        <Input field={field.name} />
        <p className="Field-error">
          {field.dirty && field.validity.state === INVALID
            ? field.validity.reason
            : (<span>&nbsp;</span>)}
        </p>
      </div>
    );
  }
}

export default injectFieldInfo(Field);
