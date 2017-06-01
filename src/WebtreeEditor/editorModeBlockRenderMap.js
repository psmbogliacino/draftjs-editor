import Draft from 'draft-js'
import Immutable from 'immutable'

const blockRenderMap = Immutable.Map({
  'unstyled': {
    element: 'div'
  }
});


const editorModeBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);

export default editorModeBlockRenderMap;