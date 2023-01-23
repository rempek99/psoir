import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import axios from 'axios'

class Header extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <p>Hello PSOIR!</p>
      </div>
    );
  }
}

class UsersTable extends React.Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    this.refreshTable()
  }

  refreshTable = () => {
    axios.get('http://localhost:8080/api/user/all').then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }

  addTester = () => {
    axios.post('http://localhost:8080/api/user/test')
    this.refreshTable()
  }
  
  render() {
    const listItems = this.state.users
    .map((user) =>    <li key={user.id}>({user.id}) {user.name}</li>);
    return (
      <div>
        <button onClick={this.refreshTable}>Refresh</button>
        <button onClick={this.addTester}>Add Tester</button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

class Page extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <UsersTable />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);

