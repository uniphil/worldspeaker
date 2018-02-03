import React, { Component } from 'react';
import './ProfileForm.css';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="ProfileForm">
        <h1>All about you</h1>
        <form action="/submit" method="post">
          <p>
            <label htmlFor="my-name">Your name: </label>
            <input
              id="my-name"
              name="my-name"
              className="ProfileForm-text"
              type="text"
              required
            />
          </p>
          <p>
            <button className="ProfileForm-button" type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
