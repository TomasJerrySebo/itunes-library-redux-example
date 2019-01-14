import React from "react";
import propTypes from "prop-types";
import { Image } from "react-bootstrap";

const AlbumIcon = props => {
  return (
    <div className="album-icon">
      <Image src={props.icon} width="60" circle />
    </div>
  );
};

AlbumIcon.propTypes = {
  icon: propTypes.string.isRequired
};
export default AlbumIcon;
