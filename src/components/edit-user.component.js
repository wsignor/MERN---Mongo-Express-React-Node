import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditUser extends Component {
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
            address: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    address: response.data.address,
                });
                console.log('user content: ' , response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
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

        axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
            .then(res => console.log(res.data));

        window.location = '/users';
    }

    render() {
        return (
            <div>
                <h3>Edit User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>First name: </label>
                        <input
                            required
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeUserFirstname}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Last name: </label>
                        <input
                            required
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeUserLastname}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Address: </label>
                        <input
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeUserAddress}>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
