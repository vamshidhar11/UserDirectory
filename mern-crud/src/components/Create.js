import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      address: '',
      contact: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, address, contact, email} = this.state;

    axios.post('/api/user', { username, address, contact, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }
            
  render() {
    const { username, address, contact, email } = this.state;
    return (
      <div class="container">
        <div class="panel paxnel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
             Add New User
            </h3>
          </div>
          <div class="panel-body">
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="User Name">User Name</label>
                <input type="text" class="form-control" name="username" value={username} onChange={this.onChange} placeholder="User Name" />
              </div>
              <div class="form-group">
                <label for="Address">Address</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="Contact">Contact</label>
                <input type="text" class="form-control" name="contact" value={contact} onChange={this.onChange} placeholder="Contact" />
              </div>
              <div class="form-group">
                <label for="Email">Email</label>
                <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="email"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>&nbsp;
              <Link to="/" type="Cancel" class="btn btn-default">cancel</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;