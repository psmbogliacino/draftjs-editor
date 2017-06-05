import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import _ from 'lodash'

const addPlugins = (source, pluginsToAdd) => {
    _.forEach(pluginsToAdd, (p) => source.push(p));
};

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

export default{
    addPlugins, 
    createEditorState
}
