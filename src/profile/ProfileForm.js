import React, { Component } from 'react';
import './ProfileForm.css';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
    };
  }

  handleNameChange = e => {
    const newName = e.currentTarget.value;
    this.setState({ nameValue: newName });
  }

  handleSubmit = e => {
    e.preventDefault();  // stop the browser's submit behaviour
    const { onSave } = this.props;
    const { nameValue } = this.state;
    const me = {
      name: nameValue,
    };
    onSave(me);
  }

  render() {
    return (
      <div className="ProfileForm">
        <h1>All about you</h1>
        <form action="/submit" method="post" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="my-name">Your name: </label>
            <input
              className="ProfileForm-text"
              id="my-name"
              name="my-name"
              onChange={this.handleNameChange}
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
