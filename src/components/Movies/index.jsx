import { useState, useEffect } from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import MoviesCardList from "@/components/MoviesCardList/MoviesCardList";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import * as MoviesApi from "@/utils/MoviesApi";
import { filterMovies, filterMovieDuration } from "@/utils/utils";

import "./movies.css";

function Movies({ loggedIn, handleLikeFilm, savedMovies, onDeleteCard }) {
  const [isShortMovies, setisShortMovies] = useState(false);
  const [isQueryError, setisQueryError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialCardsMovies, setInitialCardsMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("moviesQuery")) {
      setIsNotFound(filteredMovies.length === 0);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterMovieDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  function getShortMovieToggleCheck() {
    setisShortMovies(!isShortMovies);
    if (isShortMovies) {
      setFilteredMovies(initialCardsMovies);
    } else {
      const { length } = filterMovieDuration(initialCardsMovies);
      if (length === 0) {
        setFilteredMovies(filterMovieDuration(initialCardsMovies));
      } else {
        setFilteredMovies(filterMovieDuration(initialCardsMovies));
      }
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setisShortMovies(true);
    } else {
      setisShortMovies(false);
    }
  }, []);

  function getsearchFilterMovie(query) {
    localStorage.setItem("moviesQuery", query);
    localStorage.setItem("shortMovies", isShortMovies);

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      getFilteredMovieListArray(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((cardsData) => {
          getFilteredMovieListArray(cardsData, query, isShortMovies);
          setisQueryError(false);
        })
        .catch((err) => {
          setisQueryError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function getFilteredMovieListArray(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesCardList);
    setFilteredMovies(
      short ? filterMovieDuration(moviesCardList) : moviesCardList,
    );
    localStorage.setItem("movies", JSON.stringify(moviesCardList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        isShortMovies={isShortMovies}
        getsearchFilterMovie={getsearchFilterMovie}
        onFilterMovies={getShortMovieToggleCheck}
      />
      <MoviesCardList
        cards={filteredMovies}
        isQueryError={isQueryError}
        isNotFound={isNotFound}
        isLoading={isLoading}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
        isSavedFilms={false}
        savedMovies={savedMovies}
      />
      <Footer />
    </section>
  );
}

export default Movies;
