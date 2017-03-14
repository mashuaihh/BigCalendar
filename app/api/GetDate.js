const DATESTRING = "20170309T080000";

function getDate(str) {
  if (str.length !== DATESTRING.length) {
    return new Date('invalid');
  }
  var year = str.slice(0, 4),
    month = str.slice(4, 6),
    day = str.slice(6,8),
    hour = str.slice(9, 11),
    minute = str.slice(11, 13),
    second = str.slice(13);
  var together = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second;
  return new Date(together);
}

function getTimeDisplayDate(str) {
  if (str.length !== DATESTRING.length) {
    return new Date('invalid');
  }
  var x = new Date();
  var year = str.slice(0, 4),
    month = str.slice(4, 6),
    day = parseInt(str.slice(6,8)),
    hour = parseFloat(str.slice(9, 11)) + x.getTimezoneOffset() / 60 + 1,
    minute = str.slice(11, 13),
    second = str.slice(13);
  if (hour >= 24) {
    hour = hour % 24;
    day++;
  }
  var hourStr = (hour < 10 ? '0' + hour : hour);
  var dayStr = (day < 10 ? '0' + day : day);
  var together = year + '-' + month + '-' + dayStr + 'T' + hourStr + ':' + minute + ':' + second;
  return new Date(together);
}


function getHourFromTime(duration) {
  return (duration/(1000*60*60)).toFixed(1);
}

function getDiffByTime(startTime, endTime) {
  var startDate = getDate(startTime);
  var endDate = getDate(endTime);
  var diff = Math.abs(endDate.getTime() - startDate.getTime());
  return diff;
}

function getDiffByHour(startTime, endTime) {
  return getHourFromTime(getDiffByTime(startTime, endTime));
}

function getEarliestTimeThatDay(str) {
  if (str.length !== DATESTRING.length) {
    return new Date('xalsjdf;laksdf');
  }
  var newStr = str.slice(0, 9) + '080000';
  return newStr;
}

var output = {
  getDate: getDate,
  getHourFromTime: getHourFromTime,
  getDiffByTime: getDiffByTime,
  getDiffByHour: getDiffByHour,
  getEarliestTimeThatDay: getEarliestTimeThatDay,
  getTimeDisplayDate: getTimeDisplayDate,
};


module.exports = output;

//function msToTime(duration) {
//  var milliseconds = parseInt((duration%1000)/100)
//    , seconds = parseInt((duration/1000)%60)
//    , minutes = parseInt((duration/(1000*60))%60)
//    , hours = parseInt((duration/(1000*60*60))%24);
//
//  hours = (hours < 10) ? "0" + hours : hours;
//  minutes = (minutes < 10) ? "0" + minutes : minutes;
//  seconds = (seconds < 10) ? "0" + seconds : seconds;
//
//  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
//}
