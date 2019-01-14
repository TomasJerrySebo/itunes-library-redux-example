import React, { Component } from "react";
import propTypes from "prop-types";
import { ListGroup, Row, Col, Image } from "react-bootstrap";
import ItemWrapper from "../../library/ItemWrapper";
import BreadCrumb from "../../library/BreadCrumb";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { setPageTitle } from "../../../store/actions/rootActions";

export class AlbumDetail extends Component {
  static propTypes = {};
  componentDidMount() {
    if (this.props.location.state)
      this.props.setPageTitle(this.props.location.state.pageTitle);
    else this.props.setPageTitle("Album Detail");
  }
  render() {
    const { albumDetail } = this.props;
    return (
      <div className="product-detail">
        {albumDetail && albumDetail.length > 0 ? (
          <Row className="show-grid">
            <Col xs={12} sm={2} className="product-thumbnail">
              <Image src={albumDetail[0].artworkUrl100} thumbnail />
            </Col>
            <Col xs={12} sm={10}>
              <a
                href={albumDetail[0].artistViewUrl}
                target="blank"
                className="link"
              >
                <h2>{albumDetail[0].artistName}</h2>
              </a>
              <dl>
                <dt>View Album</dt>
                <dd>
                  <a
                    href={albumDetail[0].collectionViewUrl}
                    target="blank"
                    className="product-detail-link"
                  >
                    {albumDetail[0].collectionName}
                  </a>
                </dd>
                <dt>Track Count</dt>
                <dd>{albumDetail[0].trackCount}</dd>
                <dt>Release Date</dt>
                <dd>
                  {moment(albumDetail[0].releaseDate).format("MMMM Do YYYY")}
                </dd>
                <dt>Album Price</dt>
                <dd>
                  {albumDetail[0].collectionPrice} {albumDetail[0].currency}
                </dd>
              </dl>
            </Col>
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
