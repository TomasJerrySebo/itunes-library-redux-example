import React from "react";
import propTypes from "prop-types";

const AlbumText = props => {
  return (
    <div className="album-text">
      <h4>{props.title}</h4>
      <p>{props.subTitle}</p>
    </div>
  );
};

AlbumText.propTypes = {
  title: propTypes.string.isRequired,
  titsubTitlele: propTypes.string
};
export default AlbumText;
