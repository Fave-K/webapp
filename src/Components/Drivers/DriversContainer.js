import React, { Component } from "react";

import Drivers from "./Drivers";
import { connect } from "react-redux";

export class DriversContainer extends Component {
  render() {
    return <Drivers {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DriversContainer);
