import React, { Component } from "react";
import { connect } from "react-redux";

import InspectionOperators from "./InspectionOperators";
export class InspectionOperatorsContainer extends Component {
  render() {
    return <InspectionOperators {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionOperatorsContainer);
