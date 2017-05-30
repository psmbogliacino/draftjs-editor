import React, {Component} from 'react';
import DemoBox from '../DemoBox'
//import BoldExmple from './BoldExample'
//import LinkExmple from './Examples/LinkExample'
//import TweetExample from './Examples/TweetExample'
import EditorPluginExample from './EditorPluginExample'




class Demo extends Component {
 

  render() {
    return (
      <div>
        <DemoBox title="Plugins">
            <EditorPluginExample />
        </DemoBox>



      </div>
    );
  }
}

export default Demo;