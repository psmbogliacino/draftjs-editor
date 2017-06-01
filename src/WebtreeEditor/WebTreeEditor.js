import _ from 'lodash'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Editor from 'draft-js-plugins-editor';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';

import TextToolbarPlugin from './Plugins/TextToolbarPlugin'
import ImagePlugin from './Plugins/ImagePlugin'

let plugins = [];
let components = [];

plugins = _.concat(plugins, TextToolbarPlugin.plugin);
components = _.concat(components, TextToolbarPlugin.component);

plugins = _.concat(plugins, ImagePlugin.plugin);
components = _.concat(components, ImagePlugin.component);



const ExtraComponents = components.map((item, index) => {<item key={index} />})


console.log(plugins)

class WebTreeEditor extends Component {

    constructor(props) {
        super(props);

        const editorState = createEditorState(props);

        this.state = {
            editorState: editorState
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
            <div>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                />
                <TextToolbarPlugin.component />
                <ImagePlugin.component />
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
