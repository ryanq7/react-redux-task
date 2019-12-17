import React, { Component } from 'react';
import './Home.css';
import {connect} from 'react-redux';
import data from '../../react-redux-task';
import allIUsersAction from '../../actions/allIUsersAction';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='logo'>
                </div>
                <div>
                <h1>React Redux Task</h1>
                </div>
                <div className='footer'>
                    <button className='btn' onClick={this.revealUser}>Enter</button>
                </div>
            </div>
        )
    }
    revealUser = () => {
        this.props.dispatch(allIUsersAction(data));
        this.props.history.push('/app')
    }
}
const maprStateToProps = store => {
    return {
        allUser: store.allUser
    }
}
export default connect(maprStateToProps)(Home);