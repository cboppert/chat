import React, { Component } from 'react';

export default class CreateChatModal extends Component {
   createChat() {
      null;
   }

   render() {
      const modalClass = this.props.modalObject.showCreateChatModal ? '' : 'display-none';
      return(
         <section id="create-chat" className={`modal ${modalClass}`} ref="createChatModal">
            <h1 className="close-modal-x" onClick={this.props.modalObject.toggleModal.bind(this, "createChat", false)}>X</h1>
            <form id="create-chat-form">
               <section className="modal-form">
                  <header>
                     <h1>Create Chatroom</h1>
                  </header>
                  <input type="text" name="title" placeholder="Title" className="modal-input" />
                  <div id="public-private-toggle" className="modal-input">
                     <label htmlFor="public">Public
                        <input type="radio" name="private" value="false" defaultChecked />
                     </label>
                     <label htmlFor="private">Private
                        <input type="radio" name="private" value="true" />
                     </label>
                  </div>
                  <button className="sumbit-chat" onClick={this.createChat.bind(this)} className="modal-input">Create</button>
               </section>
            </form>
         </section>
      );
   }
}
