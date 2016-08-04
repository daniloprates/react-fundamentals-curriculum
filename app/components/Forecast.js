var React = require('react');

var Forecast = function(props) {
	console.log('props ' , props);
	return props.isLoading === true
		? <h2> Loading </h2>
		: (
			<div>
				<h2>{props.cityName}</h2>
				<h3>Select a day</h3>
				<pre>{JSON.stringify(props.forecastData, null, ' ')}</pre>
			</div>
		);
}


module.exports = Forecast;