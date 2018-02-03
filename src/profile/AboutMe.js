import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div className="AboutMe">
        <h1>hi {info.name}</h1>
      </div>
    );
  }
}

export default AboutMe;
