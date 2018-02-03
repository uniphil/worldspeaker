import React, { Component } from 'react';
import './Submit.css';

import { observer } from 'mobx-react';

import { INVALID, injectFormInfo } from 'form-mechanics';

class Submit extends Component {
  render() {
    const { children, form } = this.props;
    return (
      <div className="Submit">
        {form.dirty && form.validity.state === INVALID && (
          <div className="Submit-reasons">
            <h3>These things are wrong</h3>
            <p>…but you shouldn't feel bad!</p>
            <ul>
              {Object.keys(form.validity.reason).map(field => (
                <li key={field} className="Submit-reason">
                  <strong>{field}: </strong>
                  {form.validity.reason[field]}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className="Submit-button" type="submit">{children}</button>
      </div>
    );
  }
}

export default injectFormInfo(observer(Submit));
