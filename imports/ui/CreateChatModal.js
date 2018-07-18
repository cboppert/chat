import React, { Component } from 'react';

export default class CreateChatModal extends Component {
   createChat() {
      null;
   }

   render() {
      const modalClass = this.props.modalObject.showCreateChatModal ? '' : 'display-none';
      return(
         <section id="create-chat" className={`modal ${modalClass}`} ref="createChatModal">
            <form id="create-chat-form" className="form-container">
               <div className="close-modal-x">
                  <h1 className="x" onClick={this.props.modalObject.toggleModal.bind(this, "createChat", false)}>X</h1>
               </div>
               <section className="modal-form">
                  <header>
                     <h1 className="modal-title">Create Chatroom</h1>
                  </header>
                  <input type="text" name="title" placeholder="Title" className="modal-input" />
                  <fieldset className="public-private-toggle modal-input">
                     <input type="radio" name="private" value="false" defaultChecked />
                     <label htmlFor="public">Public</label>
                     <input type="radio" name="private" value="true" />
                     <label htmlFor="private">Private</label>
                  </fieldset>
                  <button className="sumbit-chat" onClick={this.createChat.bind(this)} className="modal-input">Create</button>
               </section>
            </form>
         </section>
      );
   }
}
