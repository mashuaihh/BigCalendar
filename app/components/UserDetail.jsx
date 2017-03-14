var React = require('react');

var UserDetail = React.createClass({
  render: function () {
    var {active, name, freeHours, busyHours} = this.props;

    return (
      <span style={(active ? {fontWeight: 'bold'} : {})}>
        <span style={{fontSize: '1.5em'}}>{name}</span> Busy hours: {busyHours} Free hours: {freeHours}
      </span>
    );
  }
});

module.exports = UserDetail;