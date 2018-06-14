import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestButton extends Component {
  render() {
    return (
      <div>
        <button className="ui primary button" onClick={this.props.onClick}>Click Me</button>
        <p>The button has been clicked {this.props.clickedTimes} times!</p>
      </div>  
    )
  }
}

TestButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  clickedTimes: PropTypes.number.isRequired,
}

export default TestButton;