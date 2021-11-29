
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import Navigation from './components/Navigation';
import axios from 'axios';

import { useFavourites } from './hooks/FavouriteContext';


function App() {

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFavs, setShowFavs] = useState(false);
  const faves = useFavourites();

  const setToggleShowFavs = () => {
    setCurrentPage(1);
    setShowFavs(show => !show);
  }

  useEffect(() => {
    showFavs ? getFavourites(faves) : getCharacters(currentPage);
  }, [currentPage, showFavs, faves]);

  const getCharacters = async (pageNumber) => {
    // Utilised Axios for API calls
    const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    setCharacters(apiResponse.data.data);
  };

  const getFavourites = async (favesArray) => {
    // Utilised Axios for API calls
    const dataCollection = [];
    for (const id of favesArray) {
      const characterData = await axios.get(`https://api.disneyapi.dev/characters/` + id);
      dataCollection.push(characterData.data);
    }
    setCharacters(dataCollection);
  };

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} setToggleShowFavs={setToggleShowFavs} showFavsMode={showFavs} />
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;
