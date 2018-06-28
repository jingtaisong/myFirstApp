import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

class TestButton extends Component {
  render() {
    return (
      <div>
        <Button primary onClick={this.props.onClick}>Click Me</Button>
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