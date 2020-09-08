import React, { Component } from "react";
import { connect } from "react-redux";

import Safety from "./Safety";
export class SafetyContainer extends Component {
  render() {
    return <Safety {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SafetyContainer);
