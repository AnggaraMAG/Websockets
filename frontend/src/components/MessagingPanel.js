import React, { Component, Fragment } from "react";
import MessagingBox from "./MessagingBox";
import DisplayConversation from "./DisplayConversation";

export default class MessagingPanel extends Component {
  state = {
    messages: [],
  };

  connection = new WebSocket("ws://localhost:9090/");

  componentDidMount() {
    this.connection.onmessage = (message) => {
      // console.log(message);
      const data = JSON.parse(message.data);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }

  getMessage = (message) => {
    const data = { username: this.props.username, message: message };
    this.connection.send(JSON.stringify(data));
  };
  render() {
    return (
      <>
        <DisplayConversation messages={this.state.messages} />
        <MessagingBox getMessage={this.getMessage} />
        {/* tessss */}
      </>
    );
  }
}
