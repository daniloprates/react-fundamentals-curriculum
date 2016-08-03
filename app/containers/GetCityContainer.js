var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var GetCityHelper = require('../helpers/GetCityHelper');

var GetCityContainer = React.createClass({
	getDefaultProps: function() {
		return {
			direction: 'column'
		}
	},
	propTypes: {
		direction: PropTypes.string
	},
	getInitialState: function () {
		return {
			city: ''
		}
	},
	handleSubmitCity: function() {
		GetCityHelper.getForcast(this.state.city);
		// console.log(this.state.city)
	},
	handleUpdateCity: function(e) {
		this.setState({
			city: e.target.value
		})
	},
	render: function() {
		return (
			<GetCity
				direction={this.props.direction}
				onUpdateCity={this.handleUpdateCity}
				onSubmitCity={this.handleSubmitCity}
				city={this.state.city}
			 />
		);
	}

});

module.exports = GetCityContainer;
