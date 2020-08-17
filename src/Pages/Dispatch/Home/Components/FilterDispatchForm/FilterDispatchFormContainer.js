import React, { Component } from "react";
import { connect } from "react-redux";

import FilterDispatchForm from "./FilterDispatchForm";

export class FilterDispatchFormContainer extends Component {
  render() {
    return <FilterDispatchForm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDispatchFormContainer);
