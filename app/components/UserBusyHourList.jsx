var React = require('react');

var UserHour = require('UserHour');

var UserBusyHourList = React.createClass({
  render: function () {
    var {usersList, busyType} = this.props;
    var clonedList = JSON.parse(JSON.stringify(usersList));

    if (busyType === 'meeting') {
      clonedList.sort(function (a, b) {
        return b.meetingHours - a.meetingHours;
      });
    } else {
      clonedList.sort(function (a, b) {
        return b.taskHours - a.taskHours;
      });
    }

    var showList = function () {
      return clonedList.map(function (ele) {
        return (
          <UserHour key={ele.sys_id} {...ele} busyType={busyType}/>
        );
      });
    }

    return (
      <div>
        <h3 style={{fontWeight: 'bold'}}>{busyType} busy hours:</h3>
        {showList()}
      </div>
    );
  }
});

module.exports = UserBusyHourList;
