import React, { Component, Fragment } from 'react';
import './MainApp.css'
import Edit from '../Edit/Edit';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class MainApp extends Component {
    state = {
        editMode: false,
        user: {}
    }
    render() {
        return (
            <Fragment>
                <Header />
                <div className='card homePage'>
                {this.props.allUser.map((user, index) => (
                    <div className='user' onClick={() => { this.editMode(user) }} key={user.id}>
                        <div className='name'>
                            {user.name}
                        </div>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                        <p>{user.company.name}</p>
                    </div>
                ))}
                {this.state.editMode && <Edit user={this.state.user} onEdit={() => { this.setState({ editMode: false }) }} />}
            </div>
            </Fragment>
        )
    }
    i = 0;
    editMode = (user) => {
        setTimeout(() => {
            this.i = 1;
        }, 500)
        this.i === 2 && this.setState({ editMode: true, user: user })
        this.i++;
    }
}

const mapStateToProps = (store) => {
  return {
    allUser: store.allIUsersReducer
  }
}
export default connect(mapStateToProps)(MainApp);