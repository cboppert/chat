import React, { Component } from 'react';

export default class ChatList extends Component {
   render() {
      return this.props.currentUser ?
         (<section id="chat-list" class="sidebar-section">
            <h3>Chats</h3>
            <ul>
               <li>Chat One</li>
               <li>Chat Two</li>
            </ul>
         </section>)
         : (<section id="chat-list" class="sidebar-section">
            <h3>Chats</h3>
         </section>);
   }
};
