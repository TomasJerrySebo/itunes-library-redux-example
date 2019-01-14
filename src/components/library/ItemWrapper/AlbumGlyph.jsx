import React from "react";
import propTypes from "prop-types";
import { Glyphicon } from "react-bootstrap";

const AlbumGlyph = props => {
  return <Glyphicon glyph={props.glyphIcon} className="glyph-icon-right" />;
};

AlbumGlyph.propTypes = {
  glyphIcon: propTypes.string.isRequired
};
export default AlbumGlyph;
