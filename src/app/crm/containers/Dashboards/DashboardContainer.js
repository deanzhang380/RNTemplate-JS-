import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardComponent from '../../components/Dashboard/DashboardComponent'
class DashboardContainer extends Component {
    componentDidMount() {


    }

    render() {
        return <DashboardComponent {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);