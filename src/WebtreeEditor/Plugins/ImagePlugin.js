import React from 'react'
import { composeDecorators } from 'draft-js-plugins-editor'

import 'draft-js-image-plugin/lib/plugin.css'
import 'draft-js-alignment-plugin/lib/plugin.css'
import 'draft-js-focus-plugin/lib/plugin.css'

// eslint-disable-next-line import/no-unresolved
import createImagePlugin from 'draft-js-image-plugin';
// eslint-disable-next-line import/no-unresolved
import createAlignmentPlugin from 'draft-js-alignment-plugin';
// eslint-disable-next-line import/no-unresolved
import createFocusPlugin from 'draft-js-focus-plugin';
// eslint-disable-next-line import/no-unresolved
import createResizeablePlugin from 'draft-js-resizeable-plugin';
// eslint-disable-next-line import/no-unresolved
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
// eslint-disable-next-line import/no-unresolved





const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator,
    blockDndPlugin.decorator
);


const imagePlugin = createImagePlugin(decorator);

const image = {
    plugin:
    {
        blockDndPlugin,
        focusPlugin,
        alignmentPlugin,
        resizeablePlugin,
        imagePlugin
    },
    component: AlignmentTool
}

export default image;
