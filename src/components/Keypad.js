import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return <input onKeyUp={this.handleKeyUp} type="password" />;
  }

  handleKeyUp() {
    console.log("Entering password...");
  }
}

export default Keypad;
