import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ChatHeader from './ChatHeader.js';
import ChatWindow from './ChatWindow.js';
import ChatList from './ChatList.js';
import ChatUsers from './ChatUsers.js';

import CreateChatModal from './CreateChatModal.js';

import { Users } from '../apis/users.js';

// Represents the entire chat application
class App extends Component {
   constructor(props) {
      super(props);

      Meteor.subscribe('allUsers', () => {
         this.state = { showCreateChatModal : false,
                        allUsers : Meteor.users.find().fetch() };
      });
      this.state = { showCreateChatModal : false };
   }

   render() {
      var that = this;

      var modalObject = {
         showCreateChatModal: this.state.showCreateChatModal,
         currentUser: this.state.currentUser,
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
                  modalObject={modalObject}
                  users={this.props.allUsers} />
            </div>
         </div>
      );
   }
}

export default withTracker(() => {
   Meteor.subscribe('allUsers').ready();

   return {
      currentUser: Meteor.user(),
      allUsers: Meteor.users.find({}).fetch()
   }
})(App);
