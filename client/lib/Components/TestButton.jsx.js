import React, { Component } from 'react';

class TestButton extends Component {
  render() {
    return (
      <div className="ui primary button">
        <button className="ui primary button" onClick={this.props.onClick}>Click Me</button>
      </div>  
    )
  }
}

export default TestButton;