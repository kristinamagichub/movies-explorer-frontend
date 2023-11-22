import { useState, useEffect } from "react";

import SearchForm from "@/components/SearchForm/SearchForm";
import MoviesCardList from "@/components/MoviesCardList/MoviesCardList";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { filterMovies, filterMovieDuration } from "@/utils/utils";

function SavedMovies({ loggedIn, onDeleteCard, savedMovies }) {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearchRequest, setSearchRequest] = useState("");
  const [isFilteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setShortFilm] = useState(false);

  function getShortMovieToggleCheck() {
    setShortFilm(!isShortMovies);
  }

  function getsearchFilterMovie(request) {
    setSearchRequest(request);
  }

  useEffect(() => {
    if (isFilteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [isFilteredMovies]);

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, isSearchRequest);
    setFilteredMovies(
      isShortMovies ? filterMovieDuration(moviesCardList) : moviesCardList,
    );
  }, [savedMovies, isShortMovies, isSearchRequest]);

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        onFilterMovies={getShortMovieToggleCheck}
        getsearchFilterMovie={getsearchFilterMovie}
      />
      <MoviesCardList
        cards={isFilteredMovies}
        isSavedFilms={true}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
        isNotFound={isNotFound}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
