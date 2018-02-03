import React, { Component } from 'react';
import './AboutMe.css';

const howAlert = sleepLevel => {
  if (sleepLevel === 0) {
    return 'not at all';
  } else if (sleepLevel < 50) {
    return 'not very';
  } else if (sleepLevel < 90) {
    return 'fairly';
  } else {
    return 'like a hawk, super';
  }
};

class AboutMe extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="AboutMe">
        <h1>hi <span style={{color: info.faveColour}}>{info.name}</span></h1>
        <p>you must be {howAlert(info.alertness)} alert!</p>
      </div>
    );
  }
}

export default AboutMe;
