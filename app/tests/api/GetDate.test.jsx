var expect = require('expect');

var GetDate = require('../../api/GetDate');

describe('Date', function () {
  it('should generate correct date string', function () {
    var str = "20170309T080000";
    expect(GetDate.getDate(str).getMonth()).toBe(2);
  });

  it('should handle invalid date', function () {
    var invalidStr = "hello South Park";
    expect(GetDate.getDate(invalidStr).toString()).toBe('Invalid Date');
  });

  it('should convert time to hours correctly', function () {
    var str1 = "20170309T080000";
    var str2 = "20170309T090000";
    var str3 = "20170309T093000";
    var str4 = "20170310T103000";
    expect(GetDate.getDiffByHour(str1, str2)).toEqual(1.0);
    expect(GetDate.getDiffByHour(str1, str3)).toEqual(1.5);
    // difference between 2 days
    expect(GetDate.getDiffByHour(str3, str4)).toEqual(25.0);
  });

  it('should return earliest time correctly', function () {
    var str4 = "20170310T103000";
    var earliest = "20170310T080000";
    expect(GetDate.getEarliestTimeThatDay(str4)).toEqual(earliest);
  });
});
