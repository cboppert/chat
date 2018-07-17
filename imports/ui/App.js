import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ChatHeader from './ChatHeader.js';
import ChatWindow from './ChatWindow.js';
import ChatList from './ChatList.js';
import ChatUsers from './ChatUsers.js';

// Represents the entire chat application
class App extends Component {
   render() {
      return (
         <div id="application">
            <ChatHeader currentUser={this.props.currentUser} />
            <ChatWindow currentUser={this.props.currentUser} />
            <ChatList currentUser={this.props.currentUser} />
            <ChatUsers currentUser={this.props.currentUser} />
         </div>
      );
   }
}

export default withTracker(() => {
   return {
      currentUser: Meteor.user()
   }
})(App);
