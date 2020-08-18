import React, { Component } from "react";

import InspectionDetailsFOrm from "./InspectionDetailsForm";
import { connect } from "react-redux";

export class InspectionDetailsFormContainer extends Component {
  render() {
    return <InspectionDetailsFOrm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionDetailsFormContainer);
