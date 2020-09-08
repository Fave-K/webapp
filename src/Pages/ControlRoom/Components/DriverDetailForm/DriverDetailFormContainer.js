import React, { Component } from "react";

import DriverDetailForm from "./DriverDetailForm";
import { connect } from "react-redux";

export class DriverDetailFormContainer extends Component {
  render() {
    return <DriverDetailForm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverDetailFormContainer);
