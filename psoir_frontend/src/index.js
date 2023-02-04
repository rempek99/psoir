import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { UsersTable } from './components/UsersTable';

class Header extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <p>Hello PSOIR!</p>
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this._child = React.createRef()
    this.state = {username: 'empty'};
  }

  handleRefresh = () => {
    this._child.current.refreshTable()
  }

  handleAddTester = () => {
    this._child.current.addTester()
  }

  handleAddUser = () => {
    this._child.current.addUser(this.state.username)
    console.log(this.state.username)
  }

  handleChangeUsername = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div>
        <Header />
        <UsersTable ref={this._child} />
        <div className='bottom-toolbar'>
          <button className='button' onClick={this.handleRefresh}>Refresh</button>
          <button className='button' onClick={this.handleAddUser}>Add User</button>
          <input id='username' className='input' placeholder="Username" type='text' onChange={this.handleChangeUsername}/>
          <button className='button right' onClick={this.handleAddTester}>Add Tester</button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);

