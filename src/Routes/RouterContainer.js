import React, { Component } from "react";
import Routes from "./Routes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class RouterContainer extends Component {
  //#region lifecycle
  componentDidMount() {}
  //#endregion
  render() {
    return <Routes {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer);
