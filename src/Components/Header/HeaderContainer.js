import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";

export class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
