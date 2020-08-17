import React, { Component } from "react";
import { connect } from "react-redux";

import DispatchDetailsForm from "./DispatchDetailsForm";
export class DispatchDetailsFormContainer extends Component {
  render() {
    return <DispatchDetailsForm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DispatchDetailsFormContainer);
