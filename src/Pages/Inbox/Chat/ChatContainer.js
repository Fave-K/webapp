import React, { Component } from "react";

import Chat from "./Chat";
import { connect } from "react-redux";

export class ChatContainer extends Component {
  render() {
    return (
      <div>
        <Chat {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
