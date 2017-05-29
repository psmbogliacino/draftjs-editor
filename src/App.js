import React, { Component } from 'react';
import MyEditor from './MyEditor'
import logo from './logo.svg';
import './css/App.css';
import './css/Editor.css';
import 'draft-js/dist/Draft.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          Article:

          <div className="editor-wrapper">
          <MyEditor />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
