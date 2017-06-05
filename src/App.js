import React, { Component } from 'react';
//import Demos from './Demos'
import WebTreeEditor from './WebtreeEditor/WebTreeEditor'
//import InlineToolbarExample from './Demos/InlineToolbarExample'
import { convertToRaw } from 'draft-js'
import './css/App.css';
import './css/Editor.css';
import initialState from './initialState'
import Demo from './Demos/ImageExample'
class App extends Component {
  constructor(props) {
    super(props);

    this.editorState = null;

    this.handleShowHtmlClick = this.handleShowHtmlClick.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(editorState) {
    this.editorState = editorState;
  }

  handleShowHtmlClick() {
    if (this.editorState == null) {
      console.log("null");
      return;
    }

    const content = this.editorState.getCurrentContent();
    const raw = convertToRaw(content);

    console.log(raw);
  }

  render() {
    return (


      <div className="editor-wrapper">

        <div className="wtp-toolbar">

          <button onClick={this.handleShowHtmlClick}>Show Html</button>
        </div>

        <WebTreeEditor contentState={initialState.image} onChange={this.handleEditorChange} />
      </div>
    );
  }
}



export default App;

