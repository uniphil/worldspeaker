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
        <p><em>a form...</em></p>
      </div>
    );
  }
}

export default ProfileForm;
