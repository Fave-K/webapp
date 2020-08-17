import React, { Component } from "react";
import { connect } from "react-redux";

import InspectionBoard from "./InspectionBoard";
export class InspectionBoardContainer extends Component {
  render() {
    return <InspectionBoard {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionBoardContainer);
