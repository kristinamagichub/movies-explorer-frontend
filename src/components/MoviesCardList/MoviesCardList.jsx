import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MoviesCard from "@/components/MoviesCard/MoviesCard";
import SearchError from "@/components/SearchError/SearchError";
import Preloader from "@/components/Preloader/Preloader";
import {
  DESKTOP_MOVIE_DISPLAY_LIMIT,
  TABLET_MOVIE_DISPLAY_LIMIT,
  MOBILE_MOVIE_DISPLAY_LIMIT,
} from "@/utils/constants";
import { ERROR_NOT_FOUND, ERROR_SERVER_CONNECT } from "@/utils/errorText";

import "./MoviesCardList.css";

export function MoviesCardList({
  cards,
  isLoading,
  isNotFound,
  isSavedFilms,
  savedMovies,
  isReqError,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  function getMovieSave(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  function getMovieShowDisplay() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownMovies(16);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  function getMovieDisplayLimit() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownMovies(shownMovies + DESKTOP_MOVIE_DISPLAY_LIMIT);
    } else if (display > 767) {
      setShownMovies(shownMovies + TABLET_MOVIE_DISPLAY_LIMIT);
    } else {
      setShownMovies(shownMovies + MOBILE_MOVIE_DISPLAY_LIMIT);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getMovieShowDisplay);
    }, 500);
    return () => {
      window.removeEventListener("resize", getMovieShowDisplay);
    };
  });

  useEffect(() => {
    getMovieShowDisplay();
  }, [cards]);

  const { pathname } = useLocation();

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={ERROR_NOT_FOUND} />}
      {isReqError && !isLoading && (
        <SearchError errorText={ERROR_SERVER_CONNECT} />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getMovieSave(savedMovies, card)}
                    cards={cards}
                    card={card}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper"></div>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getMovieSave(savedMovies, card)}
                    cards={cards}
                    card={card}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper">
                {cards.length > shownMovies ? (
                  <button
                    className="cards__button-wrapper cards__button"
                    onClick={getMovieDisplayLimit}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
