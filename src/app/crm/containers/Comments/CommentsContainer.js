import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsComponents from '../../components/NewFeed/CommentsComponents';

class CommentsContainer extends Component {
    componentDidMount() {


    }

    render() {
        return <CommentsComponents {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);