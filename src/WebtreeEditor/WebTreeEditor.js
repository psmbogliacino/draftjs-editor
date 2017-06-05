import _ from 'lodash'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Editor from 'draft-js-plugins-editor';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';

import TextToolbarPlugin from './Plugins/TextToolbarPlugin'
import ImagePlugin from './Plugins/ImagePlugin'
import editorStyles from './editorStyles.css';
 
let plugins =
    [        
        ImagePlugin.plugin.blockDndPlugin,
        ImagePlugin.plugin.focusPlugin,
        ImagePlugin.plugin.alignmentPlugin,
        ImagePlugin.plugin.resizeablePlugin,
        ImagePlugin.plugin.imagePlugin
    ];
    
/*plugins = _.concat(plugins, TextToolbarPlugin.plugin);
components = _.concat(components, TextToolbarPlugin.component);

plugins = _.concat(plugins, ImagePlugin.plugin);
components = _.concat(components, ImagePlugin.component);


console.log(plugins)
*/
class WebTreeEditor extends Component {
 state = {
    editorState: EditorState.createWithContent(this.props.contentState),
  };

   onChange = (editorState) => {
      console.log('onChange');
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

/*
    constructor(props) {
        super(props);

        const editorState = createEditorState(props);

        this.state = {
            editorState: editorState
        };
    }

    onChange = (editorState) => {
        console.log('onChange');
        this.setState({
            editorState,
        });

        if (this.props.onChange)
            this.props.onChange(editorState);
            
    };


    focus = () => {
        this.editor.focus();
    }
    */
    render() {
        return (
            <div>
                <div  onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />

                    <ImagePlugin.component />
                </div>
            </div>
        );
    }
}

WebTreeEditor.propTypes = {
    onChange: PropTypes.func
}



const createEditorState = (props) => {

    if (props.children) {
        const blocks = convertFromHTML(props.children);
        const contentState = ContentState.createFromBlockArray(blocks);
        return EditorState.createWithContent(contentState);
    }
    else if (props.contentState) {
        return EditorState.createWithContent(props.contentState);
    }
    else {
        return EditorState.createEmpty()
    }
}
export default WebTreeEditor;
