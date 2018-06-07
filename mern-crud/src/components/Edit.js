import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get('/api/user/'+this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, address, contact, email } = this.state.user;

    axios.put('/api/user/'+this.props.match.params.id, { username, address, contact, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT USER
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to='/'><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> User List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="User Name">User Name</label>
                <input type="text" class="form-control" name="username" value={this.state.user.username} onChange={this.onChange} placeholder="username" />
              </div>
              <div class="form-group">
                <label for="Address">Address</label>
                <input type="text" class="form-control" name="address" value={this.state.user.address} onChange={this.onChange} placeholder="address" />
              </div>
              <div class="form-group">
                <label for="Contact">Contact</label>
                <input type="text" class="form-control" name="contact" value={this.state.user.contact} onChange={this.onChange} placeholder="contact" />
              </div>
              <div class="form-group">
                <label for="Email">Email</label>
                <input type="text" class="form-control" name="email" value={this.state.user.email} onChange={this.onChange} placeholder="email" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>&nbsp;
              <Link to="/" type="Cancel" class="btn btn-default">Home</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;