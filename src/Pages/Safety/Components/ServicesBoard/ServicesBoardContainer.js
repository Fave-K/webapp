import React, { Component } from "react";

import ServicesBoard from "./ServicesBoard";
import { connect } from "react-redux";

export class ServicesBoardContainer extends Component {
  render() {
    return <ServicesBoard {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicesBoardContainer);
