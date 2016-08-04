var React = require('react');
var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;

var ForecastContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			forecastData: {},
			cityName: ''
		}
	},
	componentDidMount: function() {
		this.apiRequest(this.props.routeParams.city);
		this.setState({
			cityName: this.props.routeParams.city
		});
	},
	componentWillReceiveProps: function(nextProps) {
		this.apiRequest(nextProps.routeParams.city);
		this.setState({
			cityName: this.props.routeParams.city
		});
	},
	apiRequest: function(city) {
		getForcast(city)
			.then(function (forecastData) {
				this.setState({
					isLoading: false,
					forecastData: forecastData,
					cityName: forecastData.city.name
				});
			}.bind(this));
	},
	render: function() {
		return (
			<Forecast
				isLoading={this.state.isLoading}
				cityName={this.state.cityName}
				forecastData={this.state.forecastData}
			 />
		);
	}

});

module.exports = ForecastContainer;