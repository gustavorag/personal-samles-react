import React, { Component } from 'react';

class Page2 extends Component{

  render(){
    return(
      <div>
        <h1>Page 2</h1>
        <p>{this.props.match.params.profileId}</p>
      </div>
    )
  }
}

export default Page2;
