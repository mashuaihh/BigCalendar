var expect = require('expect');
var userData = require('../../api/GetList');

var CONST = require('../../constStrings');
var GetSchedule = require('../../api/GetSchedule');

describe('Schedule', function () {
  it('should validate morning schedule', function () {
    var dateStr = "20170309T093000";
    var eventArray = [];
    var lenOfArray = 2;
    for (var i = 0; i < lenOfArray; i++) {
      eventArray[i] = {};
    }
    eventArray[0][CONST.START_DATE_TIME] = '20170309T093000';
    eventArray[0][CONST.END_DATE_TIME] = '20170309T103000';
    eventArray[1][CONST.START_DATE_TIME] = '20170309T113000';
    eventArray[1][CONST.END_DATE_TIME] = '20170309T120000';
    expect(GetSchedule.isValidThatMorning(eventArray)).toBe(true);
  });

  it('should return false morning schedule', function () {
    var dateStr = "20170309T093000";
    var eventArray = [];
    var lenOfArray = 2;
    for (var i = 0; i < lenOfArray; i++) {
      eventArray[i] = {};
    }
    eventArray[0][CONST.START_DATE_TIME] = '20170309T083000';
    eventArray[0][CONST.END_DATE_TIME] = '20170309T103000';
    eventArray[1][CONST.START_DATE_TIME] = '20170309T110000';
    eventArray[1][CONST.END_DATE_TIME] = '20170309T120000';
    expect(GetSchedule.isValidThatMorning(eventArray)).toBe(false);
  });

  it('should return an array', function () {
    var rst = GetSchedule.getDaysOfUsers(userData);
    expect(rst.forEach !== undefined).toBe(true);
  });
});
