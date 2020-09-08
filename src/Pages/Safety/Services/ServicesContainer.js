import React, { Component } from "react";

import Services from "./Services";
import { connect } from "react-redux";

export class ServicesContainer extends Component {
  render() {
    return <Services {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);
