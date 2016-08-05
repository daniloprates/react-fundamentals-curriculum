var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getDefaultProps: function() {
		return {
			direction: 'column'
		}
	},
	propTypes: {
		direction: PropTypes.string
	},
	getInitialState: function () {

		window.context = this.context;
		window.props = this.props;

	    // var currentPath = this.context.router.getCurrentPathname();
	    console.log('this.context.router ' , this.context.router);
	    // var currentParams = this.context.router.getCurrentParams();

	    console.log('this.props ' , this.props);


		return {
			city: ''
		}
	},
	handleSubmitCity: function(e) {
		e.preventDefault()
		console.log(this.state.city)
		this.context.router.push('/forecast/' + this.state.city)
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
