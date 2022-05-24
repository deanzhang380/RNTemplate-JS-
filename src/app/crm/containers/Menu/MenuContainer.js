import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuComponent from '../../components/Menu/MenuComponent'
class MenuContainer extends Component {
    componentDidMount() {


    }

    render() {
        return <MenuComponent {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);