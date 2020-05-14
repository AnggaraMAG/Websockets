import React, { Component } from "react";

export default class DisplayConversation extends Component {
  displayMessage = () =>
    this.props.messages.map((message) => (
      <div>
        {message.username} : {message.message}
      </div>
    ));
  render() {
    return <div id="displayConversation">{this.displayMessage()}</div>;
  }
}
