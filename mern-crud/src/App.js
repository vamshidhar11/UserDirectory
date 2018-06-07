import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('/api/user')
      .then(res => {
        this.setState({ users: res.data});
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              USER DIRECTORY
            </h3>
          </div>
          <div class="panel-body">
         <h4><Link to="/create" type="button" class="btn btn-primary pull-right">Add users</Link></h4>
           
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>USER NAME</th>
                  <th>ADDRESS</th>
                  <th>CONTACT</th>
                  <th>EMAIL</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user =>
                  <tr>
                    
                    <td>{user.username}</td>
                    <td>{user.address}</td>
                    <td>{user.contact}</td>
                    <td>{user.email}</td>
                    <td><Link to={`/edit/${user._id}`} type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span></Link>&nbsp;
        <Link to={`/show/${user._id}`} type="button" class="btn btn-danger">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;