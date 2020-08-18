import React, { Component } from "react";

import Inbox from "./Inbox";
import { connect } from "react-redux";

export class InboxContainer extends Component {
  render() {
    return <Inbox {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);
