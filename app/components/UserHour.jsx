var React = require('react');

var UserHour = React.createClass({
  render: function () {
    var {name, sys_id, freeHours, busyHours, busyType} = this.props;
    var busyTypeHour = busyType + 'Hours';
    var dd = this.props[busyTypeHour];

    return (
      <div>
        {name} {dd}
      </div>
    );
  }
});

module.exports = UserHour;
