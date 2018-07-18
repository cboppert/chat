import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper';

export default class ChatHeader extends Component {
   render() {
      return(
         <header id="chat-header">
            { this.props.currentUser ?
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
            : <section id="chat-info"></section>}
            <section id="user-info">
               <div id="user">
                  <AccountsUIWrapper />
               </div>
               <div id="avatar"></div>
            </section>
         </header>
      );
   }
}
