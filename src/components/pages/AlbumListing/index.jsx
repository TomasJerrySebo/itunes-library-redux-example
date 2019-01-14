import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import propTypes from "prop-types";
import ItemWrapper from "../../library/ItemWrapper";
import { connect } from "react-redux";
import { setPageTitle } from "../../../store/actions/rootActions";
import { setLikedAlbum } from "../../../store/actions/rootActions";
import moment from "moment";
export class AlbumListing extends Component {
  state = { artistName: "Album Detail" };
  componentDidMount() {
    if (this.props.albumsList && this.props.albumsList[0]) {
      this.setState(
        { artistName: this.props.albumsList[0]["artistName"] },
        () => this.props.setPageTitle(this.state.artistName)
      );
    }
  }
  albumArtistSelect = (albumName, albumId, albumImg) => {
    this.props.setLikedAlbum({
      albumId: albumId,
      artistName: this.state.artistName,
      albumName: albumName,
      albumImg
    });
  };
  render() {
    let itemWrapper = (
      <div>
        <h4>Loading...</h4>
      </div>
    );
    if (this.props.albumsList && this.props.albumsList.length > 0) {
      itemWrapper = this.props.albumsList.map(item => {
        let glyph = "heart-empty";
        if (item.wrapperType === "collection") {
          if (
            this.props.likedAlbums &&
            this.props.likedAlbums.length > 0 &&
            this.props.likedAlbums.some(
              liked => liked.albumId === item.collectionId
            )
          ) {
            glyph = "heart";
          }
          return (
            <ItemWrapper
              key={item.collectionId}
              id={item.collectionId}
              title={item.collectionName}
              subTitle={moment(item.releaseDate).format("MMMM Do YYYY")}
              icon={item.artworkUrl60}
              albumArtistSelect={this.albumArtistSelect}
              glyphIcon={glyph}
            />
          );
        }
        return "";
      });
    }
    return <ListGroup>{itemWrapper}</ListGroup>;
  }
}
const mapStateToProps = state => {
  return { albumsList: state.albumsList, likedAlbums: state.likedAlbums };
};
const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    setLikedAlbum: album => dispatch(setLikedAlbum(album))
  };
};

AlbumListing.propTypes = {
  albumsList: propTypes.array.isRequired,
  likedAlbums: propTypes.array.isRequired,
  setPageTitle: propTypes.func.isRequired,
  setLikedAlbum: propTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumListing);
