import React, { Component } from 'react';

import MortgageCalculationContainer from '../Containers/MortgageCalculationContainer';
import TestButtonContainer from '../Containers/TestButtonContainer';

class App extends Component {
  render() {
    return (
      <MortgageCalculationContainer/>  
      //<TestButtonContainer/>
    )
  }
}

export default App;