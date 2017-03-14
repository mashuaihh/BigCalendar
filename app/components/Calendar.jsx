var React = require('react');

var BigCalendar = require('react-big-calendar');
var moment = require('moment');

var date = require('../api/GetDate');
var CONST = require('../constStrings');

require('style!css!BigCalStyle')
BigCalendar.momentLocalizer(moment);

var Calendar = React.createClass({
  render: function () {
    var {userMap, userEventListMap, activeUserId} = this.props;
    const defaultDate = "20170308T110000";
    const earliestDate = "20170306T080000";
    const lastestDate = "20170310T170000";
    var events = [];
    userMap[activeUserId]['events'].forEach(function (ele) {
      var next = {};
      next['title'] = ele['name'];
      next['start'] = date.getTimeDisplayDate(ele[CONST.START_DATE_TIME]);
      next['end'] = date.getTimeDisplayDate(ele[CONST.END_DATE_TIME]);
      next['allDay'] = false;
      events.push(next);
    });
    return (
      <div>
        <BigCalendar events={events} defaultView="week"
                     defaultDate={date.getTimeDisplayDate(defaultDate)}
                     startAccessor='start' endAccessor='end'/>
      </div>
    );
  }
});

module.exports = Calendar;