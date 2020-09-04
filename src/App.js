import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';
import Account from './Account'

function App() {
  const [isLogged, setLoginState] = useState(false);
  const showContent = (login) => {
    setLoginState(login);
  }
  useEffect(() => {
    localStorage.removeItem('showavatar');
  }, [])

  return (
    <div className="app">
      <Nav />
      {!isLogged && <Account contentHide={showContent} />}
      {isLogged && <>
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </>}
    </div>
  );
}

export default App;
