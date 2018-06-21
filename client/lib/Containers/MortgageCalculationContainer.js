import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../Actions/actionCreators';
import MortgageCalculation from '../Components/MortgageCalculation.jsx';
import { getClickedTimes } from '../Selectors/testSelector';

class MortgageCalculationContainer extends Component {
    render() {
        return (
            <MortgageCalculation></MortgageCalculation>
        );
    }
};

function mapStateToProps(state) {
    return {
        clickedTimes: getClickedTimes(state),
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        'onClick': ActionCreators.clickTestButton,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MortgageCalculationContainer);