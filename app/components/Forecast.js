var React = require('react');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 45,
    fontWeight: 100,
  },
}

ForecastDayUI = function(props) {
	console.log('props ' , props);
	return (
		<div>DAY!</div>
	)

}

var ForecastUI = function(props) {
	return (
		<div style={styles.container}>
			<h2 style={styles.title}>{props.city}</h2>
			<h3>Select a day</h3>
			{props.forecast.list.map(function(weatherDay){
				return <ForecastDayUI key={weatherDay.dt} weatherDay={weatherDay} />
			})}
			{<pre>{JSON.stringify(props.forecast, null, ' ')}</pre>}
		</div>
	)

}

var Forecast = function(props) {
	console.log('props.isLoading ' , props.isLoading);
	return props.isLoading === true
		? <h2 style={styles.title}> Loading </h2>
		: <ForecastUI city={props.cityName} forecast={props.forecastData} />
}

module.exports = Forecast;