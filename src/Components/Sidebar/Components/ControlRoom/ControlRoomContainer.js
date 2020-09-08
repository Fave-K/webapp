import React, { Component } from "react";

import ControlRoom from "./ControlRoom";
import { connect } from "react-redux";
export class ControlRoomContainer extends Component {
  render() {
    return <ControlRoom {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlRoomContainer);
