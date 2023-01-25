import React from 'react';
import './styles.css'

export class UserTile extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className='user-tile'>
        {this.props.name}
      </div>
    );
  }
}
