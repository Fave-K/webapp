import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebar from "./Sidebar";
export class SidebarContainer extends Component {
  render() {
    return <Sidebar {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
