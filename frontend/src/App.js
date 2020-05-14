import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import MessagingPanel from "./components/MessagingPanel";

export default class App extends Component {
  state = {
    username: null,
  };

  setUsername = (username) => {
    this.setState({ username });
    console.log(username);
  };
  render() {
    return (
      <div className="App">
        {!this.state.username ? (
          <Login setUsername={this.setUsername} />
        ) : (
          <MessagingPanel username={this.state.username} />
        )}
      </div>
    );
  }
}
