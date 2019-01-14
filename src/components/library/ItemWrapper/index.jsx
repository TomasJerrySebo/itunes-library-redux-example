import React, { Component } from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import propTypes from "prop-types";
import AlbumIcon from "./AlbumIcon";
import AlbumText from "./AlbumText";
import AlbumGlyph from "./AlbumGlyph";

export class ItemWrapper extends Component {
  render() {
    return (
      <ListGroupItem
        onClick={() => {
          this.props.albumArtistSelect(
            this.props.title,
            this.props.id,
            this.props.icon
          );
        }}
      >
        <AlbumIcon icon={this.props.icon} />
        <AlbumText title={this.props.title} subTitle={this.props.subTitle} />
        <AlbumGlyph
          className="glyph-icon-right"
          glyphIcon={this.props.glyphIcon}
        />
      </ListGroupItem>
    );
  }
}
ItemWrapper.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
  icon: propTypes.string.isRequired,
  albumArtistSelect: propTypes.func.isRequired,
  glyphIcon: propTypes.string.isRequired
};

export default ItemWrapper;
