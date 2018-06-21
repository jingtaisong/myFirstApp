import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MortgageCalculation extends Component {
  render() {
    return (
      <div>
        <input className="ui massive input" type="text" placeholder="Enter the number of years..."></input>
      </div>  
    )
  }
}

MortgageCalculation.propTypes = {
}

export default MortgageCalculation;