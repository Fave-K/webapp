import React, { Component } from "react";
import { connect } from "react-redux";

import Operators from "./Operators";
export class OperatorsContainer extends Component {
  render() {
    return <Operators {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorsContainer);
