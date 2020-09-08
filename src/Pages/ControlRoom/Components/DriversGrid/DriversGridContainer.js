import React, { Component } from "react";

import DriversGrid from "./DriversGrid";
import { connect } from "react-redux";

export class DriversGridContainer extends Component {
  render() {
    return <DriversGrid {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriversGridContainer);
