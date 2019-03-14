import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {withRouter} from 'react-router-dom'

import {getData} from '../actions';

class PrivateFriends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>Here is the privates</div>
        ) 
    }

}

const mapStateToProps = ({
}) => ({

})

export default withRouter(
    connect(mapStateToProps, {getData})(PrivateFriends))