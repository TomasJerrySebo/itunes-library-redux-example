const initState = {
  likedAlbums: [],
  qs: "",
  artistList: [],
  albumsList: [],
  albumDetail: [],
  pageTitle: "Liked Albums"
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PAGE_TITLE":
      return { ...state, pageTitle: action.pageTitle };
    case "SET_SEARCH_QS":
      return { ...state, qs: action.qs };
    case "ARTIST_FETCH_SUCCEEDED":
      return { ...state, artistList: action.artists };
    case "ALBUMS_FETCH_SUCCEEDED":
      return { ...state, albumsList: action.albums };
    case "DETAIL_PAGE_FETCHED":
      return { ...state, albumDetail: action.albumDetail };
    case "LIKED_ALBUM_SET":
      const { likedAlbums } = state;
      const { albumId } = action.album;
      if (likedAlbums.some(item => item.albumId === albumId)) {
        const removeLikedAlbums = likedAlbums.filter(
          i => i.albumId !== albumId
        );
        return { ...state, likedAlbums: removeLikedAlbums };
      }
      return { ...state, likedAlbums: [...likedAlbums, action.album] };
    case "API_ERROR":
      alert(
        `Sorry something went wrong with your request. And the following error occured: ${
          action.message
        }. For more detail check your browser console.`
      );
      return state;
    default:
      return state;
  }
};
export default rootReducer;
