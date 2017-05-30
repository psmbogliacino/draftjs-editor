import React, {Component} from 'react';


class DemoBox extends Component {
 

  render() {
    return (
      <div className="demobox">
          <h1 className="demobox-title" >{this.props.title}</h1>
          <div className="demobox-content">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default DemoBox;