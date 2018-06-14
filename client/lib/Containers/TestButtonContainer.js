import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../Actions/actionCreators';
import TestButton from '../Components/TestButton.jsx';

class TestButtonContainer extends Component {
    render() {
        return (
            <TestButton onClick={this.props.onClick}/>
        );
    }
};

function mapStateToProps(state) {
    return {}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        'onClick': ActionCreators.clickTestButton,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TestButtonContainer);