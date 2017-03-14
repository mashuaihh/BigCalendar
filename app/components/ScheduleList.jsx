var React = require('react');

var ScheduleUser = require('ScheduleUser');

var ScheduleList = React.createClass({
  render: function () {
    var {dayList} = this.props;
    var showList = function () {
      return dayList.map(function (ele, idx) {
        return (
          <ScheduleUser key={idx} dayList={dayList} idx={idx}/>
        );
      });
    };
    return (
      <div>
        <h3 style={{fontWeight: 'bold'}}>morning task schedule list:</h3>
        {showList()}
      </div>
    );
  }
});

module.exports = ScheduleList;