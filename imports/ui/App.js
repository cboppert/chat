import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ChatHeader from './ChatHeader.js';
import ChatWindow from './ChatWindow.js';
import ChatList from './ChatList.js';
import ChatUsers from './ChatUsers.js';

import CreateChatModal from './CreateChatModal.js';

// Represents the entire chat application
class App extends Component {
   constructor(props) {
      super(props);

      this.state = { showCreateChatModal : false };
   }

   render() {
      var that = this;

      var modalObject = {
         showCreateChatModal: this.state.showCreateChatModal,
         toggleModal: function(modalName, display) {
            switch(modalName) {
               case "createChat":
                  that.setState({showCreateChatModal: display});
                  break;
            }
         }
      }

      return (
         <div id="application">
            <div id="application-container">
               <ChatHeader currentUser={this.props.currentUser}
                           modalObject={modalObject} />
               <ChatWindow currentUser={this.props.currentUser} />
               <ChatList currentUser={this.props.currentUser} />
               <ChatUsers currentUser={this.props.currentUser} />
            </div>
            <div id="modals">
               <CreateChatModal currentUser={this.props.currentUser}
                                modalObject={modalObject} />
            </div>
         </div>
      );
   }
}

export default withTracker(() => {
   return {
      currentUser: Meteor.user()
   }
})(App);
