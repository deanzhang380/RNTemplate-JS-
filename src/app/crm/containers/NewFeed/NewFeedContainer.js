import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewFeedComponent from '../../components/NewFeed/NewFeedComponent'
class NewFeedContainer extends Component {
    componentDidMount() {


    }

    render() {
        return <NewFeedComponent {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedContainer);