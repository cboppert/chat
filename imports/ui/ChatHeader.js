import React, { Component } from 'react';

export default class ChatHeader extends Component {
   render() {
      return(
         <header id="chat-header">
            <section id="chat-info">
               <div id="chat-title">
                  <h1>Chat Window</h1>
               </div>
               <div id="chat-actions">
                  <h4 className="chat-action">Create Chat</h4>
                  <h4 className="chat-action"> | Join Chat</h4>
                  <h4 className="chat-action"> | Add Member to Chat</h4>
               </div>
            </section>
            <section id="user-info">
               <div id="avatar"></div>
               <div id="user">
                  <h1>Username</h1>
                  <h4>Edit Profile</h4>
               </div>
            </section>
         </header>
      );
   }
}
