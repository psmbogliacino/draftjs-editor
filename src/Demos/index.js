import React, { Component } from 'react';
import DemoBox from '../DemoBox'
//import BoldExmple from './BoldExample'
//import LinkExmple from './Examples/LinkExample'
//import TweetExample from './Examples/TweetExample'
import EditorPluginExample from './EditorPluginExample'




class Demo extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    console.log(editorState);
  }

  render() {
    return (
      <div>
        <DemoBox title="Plugins">
          <EditorPluginExample onChange={this.onChange}>
            hola mundo
          </EditorPluginExample>
        </DemoBox>



      </div>
    );
  }
}

export default Demo;