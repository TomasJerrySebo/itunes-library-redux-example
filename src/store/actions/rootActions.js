export const setPageTitle = pageTitle => {
  return { type: "SET_PAGE_TITLE", pageTitle };
};
export const setSearchQs = qs => {
  return { type: "SET_SEARCH_QS", qs };
};
export const getArtistsList = term => {
  return { type: "GET_ARTISTS", term };
};
export const getArtistAlbum = artistId => {
  return { type: "GET_ALBUMS", artistId };
};
export const setLikedAlbum = album => {
  return { type: "SET_LIKED_ALBUM", album };
};
export const getAlbumDetail = albumId => {
  return { type: "GET_ALBUM_DETAIL", albumId };
};
