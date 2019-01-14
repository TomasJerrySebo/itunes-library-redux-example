import React from "react";
import propTypes from "prop-types";
import { Col } from "react-bootstrap";
import moment from "moment";
const AlbumDescription = props => {
  const { albumDetail } = props;
  return (
    <Col xs={12} sm={10}>
      <a href={albumDetail.artistViewUrl} target="blank" className="link">
        <h2>{albumDetail.artistName}</h2>
      </a>
      <dl>
        <dt>View Album</dt>
        <dd>
          <a
            href={albumDetail.collectionViewUrl}
            target="blank"
            className="product-detail-link"
          >
            {albumDetail.collectionName}
          </a>
        </dd>
        <dt>Track Count</dt>
        <dd>{albumDetail.trackCount}</dd>
        <dt>Release Date</dt>
        <dd>{moment(albumDetail.releaseDate).format("MMMM Do YYYY")}</dd>
        <dt>Album Price</dt>
        <dd>
          {albumDetail.collectionPrice} {albumDetail.currency}
        </dd>
      </dl>
    </Col>
  );
};

AlbumDescription.propTypes = { albumDetail: propTypes.object.isRequired };

export default AlbumDescription;
