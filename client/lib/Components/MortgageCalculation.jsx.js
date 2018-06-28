import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

class MortgageCalculation extends Component {
  render() {
    return (
      <div>
        <Input 
          placeholder="Enter the number of years..." 
          label={{basic: true, content: 'years'}}
          labelPosition='right'
        />
      </div>  
    )
  }
}

MortgageCalculation.propTypes = {
}

export default MortgageCalculation;