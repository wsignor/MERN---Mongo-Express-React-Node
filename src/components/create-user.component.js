import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeUserFirstname = this.onChangeUserFirstname.bind(this);
        this.onChangeUserLastname = this.onChangeUserLastname.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            address: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeUserFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeUserLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeUserAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            firstname: '',
            lastname: '',
            address: '',
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>

                    <div className="form-group">
                        <label>First name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeUserFirstname}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeUserLastname}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeUserAddress}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
