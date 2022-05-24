import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChanceComponent from '../../components/Chance/ChanceComponent'
class ChanceContainer extends Component {
    componentDidMount() {
    }

    render() {
        return <ChanceComponent {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChanceContainer);