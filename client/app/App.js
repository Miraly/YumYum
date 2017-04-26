// REACT MODULES ==================================
import React, { Component } from 'react';

// Import components ==============================
//compnents here
var cookReviews = require("./components/cookReviews");

//=================================================

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1> TEST HELLO </h1>
        {this.props.children}
        <cookReviews/>
      </div>
    );
  }
}
