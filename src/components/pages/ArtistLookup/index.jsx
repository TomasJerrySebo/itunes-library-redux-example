import React, { Component } from "react";
import propTypes from "prop-types";
import SearchBar from "../../library/SearchBar";
import { connect } from "react-redux";
import {
  setPageTitle,
  getArtistsList,
  setSearchQs,
  getArtistAlbum
} from "../../../store/actions/rootActions";
import artistIcon from "../../../img/artistIcon.svg";
import { ListGroup } from "react-bootstrap";
import ItemWrapper from "../../library/ItemWrapper";

export class ArtistLookup extends Component {
  componentDidMount() {
    this.props.setPageTitle("Artists");
  }
  searchForArtist = el => {
    /* Func for firing the action for 
    fetching the Artist List Action GET_ARTISTS
     and setting the QS */
    const qs = el.target.value;
    this.props.setSearchQs(qs);
    this.props.getArtistsList(qs);
  };
  clearSearchField = el => {
    /* Func for emptying the QS and 
    artistList arr */
    this.props.setSearchQs("");
    this.props.getArtistsList("");
  };
  albumArtistSelect = (name, id) => {
    /* Func for firing the action for 
    fetching the selected Artists - Albums List
     Action GET_ALBUMS 
    by passing the artistId */
    this.props.getArtistAlbum(id);
    const artistUrl = name.replace(/\s/g, "");
    /* Forwawrding the user to the Artist Album list
     component */
    this.props.history.push(`/artist/${artistUrl}`);
  };
  render() {
    /* Setting the default empty text and not found text */
    const defaultText =
      this.props.qs && this.props.qs.length > 0
        ? "Sorry we didn't find any results, try a different artist or check your spelling"
        : "Start typing to find your favorite artists";
    return (
      <div>
        <SearchBar
          searchForArtist={this.searchForArtist}
          clearSearchField={this.clearSearchField}
          qs={this.props.qs}
        />
        <ListGroup>
          {this.props.artistList && this.props.artistList.length > 0 ? (
            this.props.artistList.map(item => (
              <ItemWrapper
                key={item.artistId}
                id={item.artistId}
                title={item.artistName}
                icon={artistIcon}
                albumArtistSelect={this.albumArtistSelect}
                glyphIcon="chevron-right"
              />
            ))
          ) : (
            <div>
              <h4>{defaultText}</h4>
            </div>
          )}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { artistList: state.artistList, qs: state.qs };
};
const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    getArtistsList: artistId => dispatch(getArtistsList(artistId)),
    setSearchQs: qs => dispatch(setSearchQs(qs)),
    getArtistAlbum: data => dispatch(getArtistAlbum(data))
  };
};
ArtistLookup.propTypes = {
  artistList: propTypes.array.isRequired,
  qs: propTypes.string.isRequired,
  setPageTitle: propTypes.func.isRequired,
  getArtistsList: propTypes.func.isRequired,
  setSearchQs: propTypes.func.isRequired,
  getArtistAlbum: propTypes.func.isRequired,
  history: propTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistLookup);
