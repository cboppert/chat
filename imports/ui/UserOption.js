import React, { Component } from 'react';

export default class UserOption extends Component {
   render() {
      <option value={this.props.user._id}>{this.props.user.username}</option>
   }
}
