export const isBiodataInFavourites = (favourites, biodata) => {
  if (!Array.isArray(favourites)) return false;
  if (!biodata || !biodata.biodataId) return false;
  
  return favourites.some(fav => fav.biodataId === biodata.biodataId);
};
