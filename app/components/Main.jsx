var React = require('react');

var userData = require('../api/GetList');
var GetSchedule = require('../api/GetSchedule');

var UserList = require('UserList');
var UserBusyHourList = require('UserBusyHourList');
var ScheduleList = require('ScheduleList');
var Calender = require('Calendar');

var Main = React.createClass({
  getInitialState: function () {
    return {
      usersList: userData,
      weekdayList: GetSchedule.getDaysOfUsers(userData),
      activeUserId: userData[0].sys_id,
      userEventListMap: GetSchedule.getUserEventListMap(userData),
      userMap: GetSchedule.getUserIdMap(userData),
      //calendar
      selected: 'basic',
    }
  },
  handleUserChoosing: function (userId) {
    this.setState({
      ...this.state,
      activeUserId: userId,
    });
  },
  render: function () {
    var usersList = this.state.usersList;
    var dayList = this.state.weekdayList;
    //calender
    var {userMap, userEventListMap, activeUserId} = this.state;
    return (
      <div style={{paddingBottom: '8em', paddingTop: '5em'}}>
        <h3>Shuai Ma</h3>
        <a href="https://www.linkedin.com/in/shuai-ma-94b42a103" target="_blank">LinkedIn</a><br/>
        <a href="https://github.com/mashuaihh" target="_blank">GitHub</a>
        <UserList usersList={usersList} activeUserId={activeUserId} chooseUser={this.handleUserChoosing}/>
        <br/>
        <Calender userMap={userMap} userEventListMap={userEventListMap} activeUserId={activeUserId}/>
        <br/>
        <UserBusyHourList usersList={usersList} busyType="meeting"/>
        <br/>
        <UserBusyHourList usersList={usersList} busyType="task"/>
        <br/>
        <ScheduleList dayList={dayList}/>
      </div>
    );
  }
});

module.exports = Main;