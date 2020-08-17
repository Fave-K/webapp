import React, { Component } from "react";
import { connect } from "react-redux";

import InspectionCard from "./InspectionCard";
export class InspectionCardContainer extends Component {
  render() {
    return <InspectionCard {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionCardContainer);
