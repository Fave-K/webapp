import React, { Component } from "react";

import ServiceCard from "./ServiceCard";
import { connect } from "react-redux";

export class ServiceCardContainer extends Component {
  render() {
    return <ServiceCard {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceCardContainer);
