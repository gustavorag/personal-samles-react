import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  constructor(props){
    super(props);


  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Page 1</Link></li>
          <li><Link to="/myId">Page 2</Link></li>
          <li><Link to="/about">Page 3</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
