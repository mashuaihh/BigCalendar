var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var UserList = require('UserList');
var UserDetail = require('UserDetail');

describe('UserList', () => {
  it('should exist', function () {
    expect(UserList).toExist();
  });

  it('should display two users', () => {
    var users = [{
      events: [],
      name: 'Faf',
      key: 'sdfasd',
      freeHours: 5,
      busyHours: 8,
    }, {
      events: [],
      key: '23rqdf',
      name: 'Faxf',
      freeHours: 6,
      busyHours: 8,
    }];
    var UserListComponent = TestUtils.renderIntoDocument(<UserList usersList={users} />);
    var UserDetailComponents = TestUtils.scryRenderedComponentsWithType(UserListComponent, UserDetail);

    expect(UserDetailComponents.length).toBe(users.length);
  });
});