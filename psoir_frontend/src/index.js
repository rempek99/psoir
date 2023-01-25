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
  }

  handleRefresh = () => {
    this._child.current.refreshTable()
  }

  handleAdd = () => {
    this._child.current.addTester()
  }

  render() {
    const table = <UsersTable />
    return (
      <div>
        <Header />
        <UsersTable ref={this._child} />
        <div className='bottom-toolbar'>
          <button className='button' onClick={this.handleRefresh}>Refresh</button>
          <button className='button' onClick={this.handleAdd}>Add Tester</button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);

