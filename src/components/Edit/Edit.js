import React, { Component } from 'react';
import './Edit.css';
import Input from '../Input/Input';
import editUserAction from '../../actions/editUserAction';
import {connect} from 'react-redux'

class Edit extends Component {
    state = { ...this.props.user }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(editUserAction(this.state));
        this.props.onEdit();
    }
    render() {
        return (
            <div className='edit'>
                <div className='card'>
                    <h2>Edit Record</h2>
                    <form onSubmit={this.onSubmit} action='/'>
                        <Input label='Name' change={this.getValue} ki="name" value={this.state.name} elm={this.getElements} />
                        <Input label='Email' change={this.getValue} ki="email" value={this.state.email} elm={this.getElements} />
                        <Input label='Phone' change={this.getValue} ki="phone" value={this.state.phone} elm={this.getElements} />
                        <div className='SmallRecords'>
                            <Input label='Website' change={this.getValue} ki="website" value={this.state.website} elm={this.getElements} />
                            <Input label='City' change={this.getCity} ki="address" value={this.state.address.city} elm={this.getElements} />
                        </div>
                        <Input label='Company Name' change={this.getCompanyName} value={this.state.company.name} elm={this.getElements} />
                        <button className='editBtn'>Save</button>
                        <button type='button' onClick={this.props.onEdit}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    getValue = (event, key) => {
        this.setState({ [key]: event.target.value });
    }
    getCity = event => {
        const address = { ...this.state.address };
        address.city = event.target.value;
        this.setState({ address: address });
    }
    getCompanyName = event => {
        const company = {...this.state.company};
        company.name = event.target.value;
        this.setState({company: company});
    }
    elms = [];
    getElements = (elm) => {
        this.elms.push(elm);
    }
}
const maprStateToProps = store => {
    return {
        allUser: store.allUser
    }
}
export default connect(maprStateToProps)(Edit);