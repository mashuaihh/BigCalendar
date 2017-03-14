var React = require('react');

var UserDetail = require('UserDetail');

var UserList = React.createClass({
  handleUserChoosing: function (userId) {
    var {chooseUser} = this.props;
    chooseUser(userId);
  },
  render: function () {
    var that = this;
    var {usersList, activeUserId} = this.props;
    var showList = function () {
      return usersList.map(function (ele) {
        return (
          <div>
            <UserDetail key={ele.sys_id} active={activeUserId === ele.sys_id ? true : false} {...ele} />
            <button className="button" onClick={that.handleUserChoosing.bind(null, ele.sys_id)}>View</button>
            <br/>
          </div>
        );
      });
    }

    return (
      <div>
        {showList()}
      </div>
    );
  }
});

module.exports = UserList;