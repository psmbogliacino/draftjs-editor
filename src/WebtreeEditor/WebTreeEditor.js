import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css'
import { EditorState } from 'draft-js';

const hashtagPlugin = createHashtagPlugin();

const plugins = [
  hashtagPlugin
];

class WebTreeEditor  extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });

    if (this.props.onChange)
      this.props.onChange(editorState);
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
      />
    );
  }
}

WebTreeEditor.propTypes = {
  onChange: PropTypes.func
}

export default WebTreeEditor;