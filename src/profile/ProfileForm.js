import React, { Component } from 'react';
import './ProfileForm.css';

// import {}


class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      sleepValue: '',
      colourValue: '',
    };
  }

  handleNameChange = e => {
    const newName = e.currentTarget.value;
    this.setState({ nameValue: newName });
  }

  handleSleepChange = e => {
    const newSleep = e.currentTarget.value;
    this.setState({ sleepValue: newSleep });
  }

  handleColourChange = e => {
    const newColour = e.currentTarget.value;
    this.setState({ colourValue: newColour });
  }

  handleSubmit = e => {
    e.preventDefault();  // stop the browser's submit behaviour
    const { onSave } = this.props;
    const { nameValue, sleepValue, colourValue } = this.state;
    const me = {
      name: nameValue,
      alertness: sleepValue,
      faveColour: colourValue,
    };
    onSave(me);
  }

  render() {
    const { nameValue, sleepValue, colourValue } = this.state;
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
              value={nameValue}
              required
            />
          </p>
          <p>
            <label htmlFor="how-much-sleep">How much did you sleep: </label>
            <input
              id="how-much-sleep"
              min="0"
              max="100"
              name="how-much-sleep"
              onChange={this.handleSleepChange}
              type="range"
              value={sleepValue}
            />
          </p>
          <p>
            <label htmlFor="fave-colour">Favourite colour: </label>
            <input
              className="ProfileForm-colour"
              id="fave-colour"
              name="fave-colour"
              onChange={this.handleColourChange}
              type="color"
              value={colourValue}
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
