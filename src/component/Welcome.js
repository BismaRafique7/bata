import React, { Component } from "react";

class Welcome extends Component { // Use uppercase 'Component'
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1> 
        <p>How are you, {this.props.name}?</p>
      </>
    );
  }
}

export default Welcome;
