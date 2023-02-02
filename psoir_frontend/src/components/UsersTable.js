import React from 'react';
import axios from 'axios';
import { UserTile } from './UserTile';
import './styles.css'

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
    axios.get('http://10.5.0.6:8080/api/user/all').then(res => {
      const users = res.data;
      this.setState({ users });
    });
  };

  addTester = () => {
    axios.post('http://10.5.0.6:8080/api/user/test').then(res => {
      this.refreshTable();
    });
  };


  render() {
    const listItems = this.state.users
      .map((user) => <UserTile key={user.id} name={user.name} />);

    return (
      <div className='users-table' ref={this.myRef}>
        {listItems}
      </div>
    );
  }
}
