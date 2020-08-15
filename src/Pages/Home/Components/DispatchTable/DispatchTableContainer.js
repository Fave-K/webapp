import React, { Component } from "react";
import { connect } from "react-redux";
import DispatchTable from "./DispatchTable";

export class DispatchTableContainer extends Component {
  render() {
    return <DispatchTable {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DispatchTableContainer);
