import React, { Component } from 'react';

import ChatHeader from './ChatHeader.js';
import ChatWindow from './ChatWindow.js';
import ChatList from './ChatList.js';
import ChatUsers from './ChatUsers.js';

// Represents the entire chat application
export default class App extends Component {
   render() {
      return (
         <div id="application">
            <ChatHeader />
            <ChatWindow />
            <ChatList />
            <ChatUsers />
         </div>
      );
   }
}
