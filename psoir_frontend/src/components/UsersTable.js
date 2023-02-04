import React from 'react';
import axios from 'axios';
import { UserTile } from './UserTile';
import './styles.css'

const URL_BASE = 'http://localhost:8080/api/'

export class UsersTable extends React.Component {


  state = {
    users: []
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.refreshTable();
  }

  refreshTable = () => {
    axios.get(URL_BASE + 'user/all').then(res => {
      const users = res.data;
      this.setState({ users });
    });
  };

  addTester = () => {
    axios.post(URL_BASE + 'user/test').then(res => {
      this.refreshTable();
    });
  };

  addUser = (username) => {
    axios.post(URL_BASE + `user/add/${username}`).then(res => {
      this.refreshTable();
    }).catch((error) => {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message)
      }
    });
  }

  handleDelete = (key, username) => {
    let confirm = window.confirm(`Do You want delete user '${username}'?`);
    if (confirm) {
      axios.delete(URL_BASE + `user/delete/${key}`).then(res => {
        this.refreshTable();
      }).catch((error) => {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message)
        }
      })
    }
  }


  render() {
    const listItems = this.state.users
      .map((user) => <UserTile key={user.id} name={user.name} handleDelete={() => { this.handleDelete(user.id, user.name) }} />);

    return (
      <div className='users-table' ref={this.myRef}>
        {listItems}
      </div>
    );
  }
}
