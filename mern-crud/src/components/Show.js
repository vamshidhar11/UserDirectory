import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/user/'+id)
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
            <h3>Delete a user</h3>
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> User List</Link></h4>
            <dl>
              <dt>User Name</dt>
              <dd>{this.state.user.username}</dd>
              <dt>Address</dt>
              <dd>{this.state.user.address}</dd>
              <dt>Contact</dt>
              <dd>{this.state.user.contact}</dd>
              <dt>Email</dt>
              <dd>{this.state.user.email}</dd>
            </dl>
            <button onClick={this.delete.bind(this, this.state.user._id)} class="btn btn-danger">Delete</button>&nbsp;
              <Link to="/" type="Cancel" class="btn btn-default">cancel</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;