import React, { Component } from 'react';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
    // Bindings
    // this.showHideDesc = this.showHideDesc.bind(this);
  }


  render(){
    return (
      <div className="">
        <input type="text" placeholder="Login"></input>
        <input type="password" placeholder="Password"></input>
        <input type="submit"></input>
      </div>
    )
  }
}

export default Login;
