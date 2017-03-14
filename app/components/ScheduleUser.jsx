var React = require('react');

var ScheduleUser = React.createClass({
  render: function () {
    var {dayList, idx} = this.props;
    const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    var showList = function () {
      return dayList[idx].map(function (ele) {
        return (
          <span key={ele.sys_id}>
            {ele.name}&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        );
      });
    }

    return (
      <div>
        <span>{WEEKDAYS[idx]}:&nbsp;&nbsp;&nbsp;</span>
        {showList()}
      </div>
    );

  }
});

module.exports = ScheduleUser;
