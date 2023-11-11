import { useState, useCallback, useEffect } from "react";

import SearchForm from "@/components/SearchForm";
import MoviesCardList from "@/components/MoviesCardList";

import MoviesApi from "@/utils/MoviesApi copy";
import "../movies/movies.css";



export default function Movies({ setIsError, addMovie, savedMovies }) {


  const [allMovies, setAllMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovies(search);
    localStorage.setItem('movie', JSON.stringify(search));
    localStorage.setItem('shorts', JSON.stringify(isCheck));
    localStorage.setItem('allmovies', JSON.stringify(movies));
    setFiltredMovies(movies.filter((movie) => {
      const searchName = movie.nameRu.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  }, []);

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      MoviesApi.getMovies() //!apiMovies
        .then((res) => {
          setAllMovies(res)
          setIsCheck(false)
          setServerError(false)
          setFirstEntrance(false)
          filter(search, isCheck, res)
        })
        .catch(err => {
          setServerError(true)
          console.error(`Ошибка при поиске фильмов ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      filter(search, isCheck, allMovies)
    }
  }


  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies);
      const search = JSON.parse(localStorage.movie);
      const isCheck = JSON.parse(localStorage.shorts);
      setServerError(false)
      setFirstEntrance(false)
      setIsCheck(isCheck)
      setAllMovies(movies)
      filter(search, isCheck, movies)
    }
  }, [filter])

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      filter(searchedMovie, false, allMovies)
      //  localStorage.setItem('shorts', JSON.stringify(false));
    } else {
      setIsCheck(true)
      filter(searchedMovie, true, allMovies)
      //  localStorage.setItem('shorts', JSON.stringify(true));
    }
  }
  return (
    <>
      < SearchForm
        isCheck={isCheck}
        searchMovies={searchMovies}
        searchedMovie={searchedMovie}
        changeShort={changeShort}
        setIsError={setIsError}
        firstEntrance={firstEntrance}
      />
      <MoviesCardList
        movies={filtredMovies}
        addMovie={addMovie}
        savedMovies={savedMovies}
        isLoading={isLoading}
        serverError={serverError}
        firstEntrance={firstEntrance}
      />
    </>
  )
}
