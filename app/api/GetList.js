var data = require('./Fetch');
var GetDate = require('./GetDate');

const MAX_FREE_HOURS_A_WEEK = 40.0;
const TASK_HOURS = 'taskHours';
const MEETING_HOURS = 'meetingHours';
const FREE_HOURS = 'freeHours';
const BUSY_HOURS = 'busyHours';
const END_DATE_TIME = 'end_date_time';
const START_DATE_TIME = 'start_date_time';

var users = data.users;
var events = data.events;

var userSet = {};
users.forEach(function (ele) {
  if (!userSet[ele.sys_id]) {
    userSet[ele.sys_id] = ele;
    userSet[ele.sys_id]['events'] = [];
  }
});

events.forEach(function (ele) {
  var userId = ele.user.value;
  if (userSet[userId]) {
    userSet[userId].events.push(ele);
  }
});

var userArray = [];
for (var property in userSet) {
  if (userSet.hasOwnProperty(property)) {
    userArray.push(userSet[property]);
  }
}

//sum up free hours
userArray.forEach(function (ele) {
  var meetingHours = 0,
      taskHours = 0;
  ele['events'].forEach(function (innerEle) {
    if (innerEle['type'] === 'meeting') {
      meetingHours += GetDate.getDiffByTime(innerEle[END_DATE_TIME], innerEle[START_DATE_TIME]);
    } else {
      taskHours += GetDate.getDiffByTime(innerEle[END_DATE_TIME], innerEle[START_DATE_TIME]);
    }
  });
  meetingHours = parseFloat(GetDate.getHourFromTime(meetingHours));
  taskHours = parseFloat(GetDate.getHourFromTime(taskHours));
  ele[BUSY_HOURS] = meetingHours + taskHours;
  ele[FREE_HOURS] = MAX_FREE_HOURS_A_WEEK - ele[BUSY_HOURS];
  ele[TASK_HOURS] = taskHours;
  ele[MEETING_HOURS] = meetingHours;
});

module.exports = userArray;


