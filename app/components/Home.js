var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}



var Home = function(props) {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Enter a City and a State</h1>
			<GetCityContainer />
		</div>
	);
}

module.exports = Home;