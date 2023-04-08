const favoriteUtils = {
    check: ({ listFavorites, mediaId }) => listFavorites && listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
  };
  
export default favoriteUtils;

// const favoriteUtils = {
//   check: ({ listFavorites, mediaId }) => Array.isArray(listFavorites) && listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
// };

// export default favoriteUtils;