import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";
import LikedAlbums from "components/pages/LikedAlbums";
import ArtistLookup from "components/pages/ArtistLookup";
import AlbumListing from "components/pages/AlbumListing";
import AlbumDetail from "components/pages/AlbumDetail";
import BreadCrumb from "components/library/BreadCrumb";
import FooterCta from "components/library/FooterCta";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Grid>
            <BreadCrumb />
            <Switch>
              <Route
                path="/"
                exact
                component={LikedAlbums}
                title="Album Listing"
              />
              <Route
                path="/liked-albums"
                component={LikedAlbums}
                title="Liked Listing"
              />
              <Route
                path="/artist-lookup"
                component={ArtistLookup}
                title="Artist Lookup"
              />
              <Route
                path="/artist/:artist"
                component={AlbumListing}
                title="Album Listing"
              />
              <Route
                path="/album/:album"
                component={AlbumDetail}
                title="Album Detail"
              />
            </Switch>
            <FooterCta />
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
