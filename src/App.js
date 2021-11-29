
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import Navigation from './components/Navigation';
import axios from 'axios';

function App() {

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCharacters(1);
  }, []);

  const getCharacters = async (pageNumber) => {
    // Utilised Axios for API calls
    const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    setCharacters(apiResponse.data.data);
  };

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;
