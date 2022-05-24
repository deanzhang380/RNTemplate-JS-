import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChanceComponent from '../../components/Chance/ChanceComponent'
import CustomBottomTabBar from './CustomBottomTabBar'
class TabBarContainer extends Component {
    componentDidMount() {
    }

    render() {
        return <CustomBottomTabBar {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TabBarContainer);