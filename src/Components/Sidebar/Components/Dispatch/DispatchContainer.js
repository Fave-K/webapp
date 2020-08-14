import React, { Component } from "react";
import { connect } from "react-redux";

import Dispatch from "./Dispatch";

export class DispatchContainer extends Component {
  render() {
    return <Dispatch {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DispatchContainer);
