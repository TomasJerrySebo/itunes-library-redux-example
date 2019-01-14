import React, { Component } from "react";
import propTypes from "prop-types";
import {
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon,
  Button
} from "react-bootstrap";

export class SearchBar extends Component {
  render() {
    return (
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.props.qs}
            onChange={this.props.searchForArtist}
          />
          <InputGroup.Button
            className={
              this.props.qs && this.props.qs.length > 0
                ? "clearInput visible"
                : "clearInput"
            }
            onClick={this.props.clearSearchField}
          >
            <Button>
              <Glyphicon glyph="remove" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }
}
SearchBar.propTypes = {
  qs: propTypes.string.isRequired,
  clearSearchField: propTypes.func.isRequired,
  searchForArtist: propTypes.func.isRequired
};

export default SearchBar;
