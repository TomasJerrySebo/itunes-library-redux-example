import React, { Component } from "react";
import propTypes from "prop-types";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class FooterCta extends Component {
  headBack = () => {
    this.props.history.goBack();
  };
  headToArtistLookup = () => {
    this.props.history.push("/artist-lookup");
  };
  render() {
    const { pathname } = this.props.location;
    /* Setting the visibility and action of 
    the bts based on the current path */
    const backBtn =
      pathname !== "/" ? <Button onClick={this.headBack}>BACK</Button> : "";
    const selectBtn =
      pathname === "/" || pathname === "/liked-albums" ? (
        <Button className="float-r" onClick={this.headToArtistLookup}>
          SELECT
        </Button>
      ) : (
        ""
      );
    return (
      <div className="footerCta">
        {backBtn}
        {selectBtn}
      </div>
    );
  }
}

FooterCta.propTypes = {
  location: propTypes.object.isRequired
};
export default withRouter(FooterCta);
