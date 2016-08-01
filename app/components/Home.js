var React = require('react');
var GetCity = require('../GetCity/');

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
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}



var Home = function(props) {
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>Enter a City and a State</h1>
			<GetCity />
		</div>
	);
}

module.exports = Home;