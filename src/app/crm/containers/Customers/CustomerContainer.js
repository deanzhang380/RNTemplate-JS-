import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerComponent from '../../components/Customer/CustomerComponent'
class CustomerContainer extends Component {
    componentDidMount() {


    }

    render() {
        return <CustomerComponent {...this.props} />
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
};

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);