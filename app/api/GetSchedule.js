var GetDate = require('./GetDate');
var CONST = require('../constStrings');

// store people who are available on that index day
var daysArray = [];
for (var i = 0; i < 5; i++) {
  daysArray[i] = [];
}

function getDaysArray(usersList) {
  usersList.forEach(function (user) {
    var days = getSingleUserEvent(user);
    // validate
    for (var i = 0; i < days.length; i++) {
      if (validateMorningSchedule(days[i])) {
        daysArray[i].push(user);
      }
    }
  });
  return daysArray;
};

function getUserEventListMap(usersList) {
  var map = {};
  usersList.forEach(function (user) {
    var days = getSingleUserEvent(user);
    map[user.sys_id] = days;
  });
  return map;
}

function getUserIdMap(usersList) {
  var map = {};
  usersList.forEach(function (user) {
    map[user.sys_id] = user;
  });
  return map;
}

function getSingleUserEvent(user) {
  var days = [];
  for (var i = 0; i < 5; i++) {
    days[i] = [];
  }
  user.events.forEach(function (event) {
    var startTime = event[CONST.START_DATE_TIME];
    var startTimeDate = GetDate.getDate(startTime);
    //group events of same day together
    var day = startTimeDate.getDay() - 1;
    days[day].push(event);
  });
  // above correct
  // sort days - sort event by starting time
  days.forEach(function (dayArr, idx) {
    days[idx].sort(function (a, b) {
      return GetDate.getDate(a[CONST.START_DATE_TIME]).getTime() - GetDate.getDate(b[CONST.START_DATE_TIME]).getTime();
    });
  });
  return days;
}

/**
 *
 * @param eventArr: Array of events on the same day
 * @returns {boolean} whether the person has one hour free in the morning of that day
 */
function validateMorningSchedule(eventArr) {
  if (eventArr.length < 1) return true;
  var earliestTimeString = GetDate.getEarliestTimeThatDay(eventArr[0][CONST.START_DATE_TIME]);
  for (var i = 0; i < eventArr.length; i++) {
    var event = eventArr[i];
    var startTimeString = event[CONST.START_DATE_TIME];
    var endTimeString = event[CONST.END_DATE_TIME];
    var diff = GetDate.getDiffByHour(earliestTimeString, startTimeString);
    if (diff >= 1.0) {
      return true;
    }
    earliestTimeString = endTimeString;
    var endHour = 8 + parseInt(GetDate.getDate(earliestTimeString).getHours());
    if (endHour >= 12) return false;
  }
  return false;
}

var output = {
  getDaysOfUsers: getDaysArray,
  isValidThatMorning: validateMorningSchedule,
  getUserEventListMap: getUserEventListMap,
  getUserIdMap: getUserIdMap,
}

module.exports = output;