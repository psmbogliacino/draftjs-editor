
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'; // eslint-disable-line import/no-unresolved
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

import {
    ItalicButton,
    BoldButton,
    CodeButton,
    UnderlineButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    AlignBlockDefaultButton,
    AlignBlockCenterButton,
    AlignBlockLeftButton,
    AlignBlockRightButton
} from 'draft-js-buttons'


const config = {
    structure: [
        ItalicButton,
        BoldButton,
        CodeButton,
        UnderlineButton,
        HeadlineOneButton,
        HeadlineTwoButton,
        HeadlineThreeButton,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton,
        CodeBlockButton,
        AlignBlockDefaultButton,
        AlignBlockCenterButton,
        AlignBlockLeftButton,
        AlignBlockRightButton
    ]
}

const inlineToolbarPlugin = createInlineToolbarPlugin(config);

const text = {
    plugin:
    [
        inlineToolbarPlugin
    ],
    component: inlineToolbarPlugin.InlineToolbar
}



export default text;

