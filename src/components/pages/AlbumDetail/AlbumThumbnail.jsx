import React from "react";
import propTypes from "prop-types";
import { Image, Col } from "react-bootstrap";

const AlbumThumbnail = props => {
  return (
    <Col xs={12} sm={2} className="product-thumbnail">
      <Image src={props.thumb} thumbnail />
    </Col>
  );
};

AlbumThumbnail.propTypes = { thumb: propTypes.string.isRequired };

export default AlbumThumbnail;
