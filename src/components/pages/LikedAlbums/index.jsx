import React, { Component } from "react";
import propTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import ItemWrapper from "../../library/ItemWrapper";
import { connect } from "react-redux";
import {
  setPageTitle,
  getAlbumDetail
} from "../../../store/actions/rootActions";

export class LikedAlbums extends Component {
  componentDidMount() {
    /* Setting page title based on loaded components */
    this.props.setPageTitle("Liked Albums");
  }
  albumArtistSelect = (albumName, albumId, albumPic) => {
    /* Main CTA function which is run onClick on the List Item 
    (Album,Artist). */
    /* Fetching the album detail data based on the albumId */
    this.props.getAlbumDetail(albumId);
    /* Forwawrding the user to the Album detail component
     with the fetched data */
    this.props.history.push(`/album/${albumId}`, {
      pageTitle: albumName
    });
  };
  render() {
    return (
      <ListGroup>
        {this.props.likedAlbums && this.props.likedAlbums.length > 0 ? (
          this.props.likedAlbums.map(item => (
            <ItemWrapper
              key={item.albumId}
              id={item.albumId}
              title={item.albumName}
              albumPic={item.artworkUrl60}
              subTitle={item.artistName}
              icon={item.albumImg}
              albumArtistSelect={this.albumArtistSelect}
              glyphIcon="chevron-right"
            />
          ))
        ) : (
          <div>
            <h1>You don't have any liked albums?</h1>
            <p>Click Continue and search for an Artist's album to like.</p>
          </div>
        )}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return { likedAlbums: state.likedAlbums };
};
const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    getAlbumDetail: albumId => dispatch(getAlbumDetail(albumId))
  };
};
LikedAlbums.propTypes = {
  likedAlbums: propTypes.array.isRequired,
  setPageTitle: propTypes.func.isRequired,
  getAlbumDetail: propTypes.func.isRequired,
  history: propTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikedAlbums);
