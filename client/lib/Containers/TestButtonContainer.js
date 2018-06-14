import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../Actions/actionCreators';
import TestButton from '../Components/TestButton.jsx';
import { getClickedTimes } from '../Selectors/testSelector';

class TestButtonContainer extends Component {
    render() {
        return (
            <TestButton onClick={this.props.onClick} clickedTimes={this.props.clickedTimes}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestButtonContainer);