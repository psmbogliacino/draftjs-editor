import React, { Component } from 'react';
import PropTypes from 'prop-types'
import editorUtils from './editorUtils'
import ImagePlugin from './Plugins/ImagePlugin'
import TextPlugin from './Plugins/TextPlugin'

// eslint-disable-next-line import/no-unresolved
import Editor from 'draft-js-plugins-editor';

let plugins = [];


editorUtils.addPlugins(plugins, ImagePlugin.plugin);
editorUtils.addPlugins(plugins, TextPlugin.plugin);


class WebTreeEditor extends Component {

    constructor(props) {
        super(props);

        const editorState = editorUtils.createEditorState(props);

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

    focus = () => {
        this.editor.focus();
    }

    render() {
        return (
            <div>
                <div className="wtp-editor" onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />

                    <TextPlugin.component />
                    <ImagePlugin.component />
                </div>
            </div>
        );
    }
}

WebTreeEditor.propTypes = {
    onChange: PropTypes.func
}


export default WebTreeEditor;
