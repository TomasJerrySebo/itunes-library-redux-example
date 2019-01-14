import { apiUrl } from "../../config/apiConfig";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

export const fetchArtistList = term =>
  axios
    .get(`${apiUrl}/search?term=${term}&entity=musicArtist`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => response.data.results)
    .catch(err => {
      throw err;
    });
/* Use of jsonp adapter as most of the album api calls return a CORS error */
export const fetchArtistAlbums = artist =>
  axios({
    url: `${apiUrl}/lookup?id=${artist}&entity=album`,
    adapter: jsonpAdapter
  })
    .then(response => response.data.results)
    .catch(err => {
      throw err;
    });
export const fetchAlbumDetail = album =>
  axios({
    url: `${apiUrl}/lookup?id=${album}`,
    adapter: jsonpAdapter
  })
    .then(response => response.data.results)
    .catch(err => {
      throw err;
    });
