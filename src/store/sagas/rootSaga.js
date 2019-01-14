import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchArtistList,
  fetchArtistAlbums,
  fetchAlbumDetail
} from "../apis/rootApis";

function* getArtists(action) {
  try {
    const artists = yield call(fetchArtistList, action.term);
    yield put({ type: "ARTIST_FETCH_SUCCEEDED", artists });
  } catch (e) {
    yield put({ type: "API_ERROR", message: e.message });
  }
}

function* getAlbums(action) {
  try {
    const albums = yield call(fetchArtistAlbums, action.artistId);
    yield put({
      type: "ALBUMS_FETCH_SUCCEEDED",
      albums
    });
  } catch (e) {
    yield put({ type: "API_ERROR", message: e.message });
  }
}

function* setLikedAlbum(action) {
  try {
    yield put({
      type: "LIKED_ALBUM_SET",
      album: action.album
    });
  } catch (e) {
    yield put({ type: "API_ERROR", message: e.message });
  }
}

function* getAlbumDetail(action) {
  try {
    const albumDetail = yield call(fetchAlbumDetail, action.albumId);
    yield put({ type: "DETAIL_PAGE_FETCHED", albumDetail });
  } catch (e) {
    yield put({ type: "API_ERROR", message: e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest("GET_ARTISTS", getArtists);
  yield takeEvery("GET_ALBUMS", getAlbums);
  yield takeEvery("GET_ALBUM_DETAIL", getAlbumDetail);
  yield takeEvery("SET_LIKED_ALBUM", setLikedAlbum);
}
