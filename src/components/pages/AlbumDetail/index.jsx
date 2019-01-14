import React, { Component } from "react";
import propTypes from "prop-types";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import AlbumDescription from "./AlbumDescription";
import AlbumThumbnail from "./AlbumThumbnail";
import { setPageTitle } from "../../../store/actions/rootActions";

export class AlbumDetail extends Component {
  componentDidMount() {
    /* Setting page title from the router 
    location state passed with the Route */
    if (this.props.location.state)
      this.props.setPageTitle(this.props.location.state.pageTitle);
    else this.props.setPageTitle("Album Detail");
  }
  render() {
    /* Rendering the album detail from the albumDetail store arr */
    const { albumDetail } = this.props;
    return (
      <div className="product-detail">
        {albumDetail && albumDetail.length > 0 ? (
          <Row className="show-grid">
            <AlbumThumbnail thumb={albumDetail[0].artworkUrl100} />
            <AlbumDescription albumDetail={albumDetail[0]} />
          </Row>
        ) : (
          <div>
            <h4>Loading...</h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { albumDetail: state.albumDetail };
};
const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title))
  };
};

AlbumDetail.propTypes = {
  albumDetail: propTypes.array.isRequired,
  setPageTitle: propTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
