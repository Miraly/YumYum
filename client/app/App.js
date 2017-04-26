// REACT MODULES ==================================
const React = require('react');

// Import components ==============================
//compnents here
var cookReviews = require("./components/cookReviews");

//=================================================

const App = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {
    return (
      <div>
        <h1> TEST HELLO </h1>
        {this.props.children}
        <cookReviews/>
      </div>
    );
  }
});

module.exports = App;
