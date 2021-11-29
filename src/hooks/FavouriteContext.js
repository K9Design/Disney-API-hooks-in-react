import React, { useContext, useState } from 'react'

const FavouriteContext = React.createContext();

export function useFavourites() {
  return useContext(FavouriteContext).favourites;
}
export function useToggleFavourites() {
  return useContext(FavouriteContext).toggleFavouriteForCharacter;
}

export function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function toggleFavouriteForCharacter(characterId) {
    if (!favourites.includes(characterId)) {
      // add to favourites
      setFavourites([...favourites, characterId]);
    }
    else {
      // remove from favourites
      const updatedFavourites = favourites.filter((id) => id !== characterId);
      setFavourites(updatedFavourites);
    }
  }

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavouriteForCharacter }}>
      {children}
    </FavouriteContext.Provider>
  )


}