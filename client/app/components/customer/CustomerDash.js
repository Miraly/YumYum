const React = require("react");
const axios = require('axios');

const CookHeader = require('../cook/CookHeader');
const CustomerFilterHeader = require('./CustomerFilterHeader');
const CustomerFilterPage = require('./CustomerFilterPage');

const CustomerDash = React.createClass({
	getInitialState: function(){
		return {
			location: null,
			cuisine: null,
			items: [],
		};
	},

	formHandler: function(query) {
		const location = (query.location === "") ? null : query.location
		const cuisine = (query.cuisine === "") ? null : query.cuisine
		this.setState({
			location: location,
			cuisine: cuisine
		})
	},

	render: function(){
		console.log("Dash Rendered");

		return(
			<div>
	      <CustomerFilterHeader formHandler={(query) => this.formHandler(query)}/>
				<CustomerFilterPage
					location={this.state.location}
					cuisine={this.state.cuisine}
				/>
			</div>
		);
	}
});

module.exports = CustomerDash;
