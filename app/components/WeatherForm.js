var React = require('react');

var WeatherFrom = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="location" type="text" placeholder="Enter city name"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherFrom;