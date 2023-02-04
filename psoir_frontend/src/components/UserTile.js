import React from 'react';
import './styles.css'

export class UserTile extends React.Component {


  render() {
    return (
      <div className='user-tile'>
        <div className='delete-but' onClick={this.props.handleDelete}/>
        {this.props.name}
      </div>
    );
  }
}
