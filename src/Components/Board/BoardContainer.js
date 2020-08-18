import React, { Component } from "react";

import Board from "./Board";
import { connect } from "react-redux";

export class BoardContainer extends Component {
  render() {
    return <Board {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
