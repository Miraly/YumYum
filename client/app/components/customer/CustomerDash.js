
const React = require("react");

const CustomerDash = React.createClass({

	render: function(){
		return (
			<div>
      	<CustomerFilterHeader />
      	{this.props.children}
			</div>
		);
	}
});
