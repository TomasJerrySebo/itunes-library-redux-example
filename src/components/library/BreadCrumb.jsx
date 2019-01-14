import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

const BreadCrumb = props => {
  return (
    <div className="breadcrumb">
      <h4>{props.pageTitle}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return { pageTitle: state.pageTitle };
};
BreadCrumb.propTypes = {
  pageTitle: propTypes.string.isRequired
};

export default connect(mapStateToProps)(BreadCrumb);
