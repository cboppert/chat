import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
   // These correspond with the react component lifecycle
   componentDidMount() {
      this.view = Blaze.render(Template.loginButtons,
         ReactDOM.findDOMNode(this.refs.container));
   }

   componentWillUnmount() {
      Blaze.remove(this.view);
   }

   render() {
      return <span ref="container" />;
   }
}
