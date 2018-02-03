import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProfileForm from './profile/ProfileForm';
import AboutMe from './profile/AboutMe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: null,
    };
  }

  handleSaveProfile = infoAboutMe =>
    this.setState({ me: infoAboutMe })

  render() {
    const { me } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {me === null ? (
          <ProfileForm onSave={this.handleSaveProfile} />
        ) : (
          <AboutMe info={me} />
        )}
      </div>
    );
  }
}

export default App;
