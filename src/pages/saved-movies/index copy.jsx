import { useContext, useEffect } from "react";
import SearchForm from "@/components/SearchForm";
import MoviesCardList from "@/components/MoviesCardList";

export function SavedMovies({ savedMovie, onDelete, setIsError }) { //!savedMovie

  const [filtredMovies, setFiltredMovies] = useState(savedMovie);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovie(search);

    setFiltredMovies(movies.filter((movie) => {
      const searchName = movie.nameRu.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  }, []);

  function searchMovies(search) {
    setFirstEntrance(false)
    filter(search, isCheck, savedMovie)
  }

  useEffect(() => {
    if (savedMovie.length === 0) {
      setFirstEntrance(true)
    } else {
      setFirstEntrance(false)
    }
    filter(searchedMovie, isCheck, savedMovie)
  }, [filter, savedMovie, isCheck, searchedMovie])

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      setFirstEntrance(false)
      filter(searchedMovie, false, savedMovie)
    } else {
      setIsCheck(true)
      setFirstEntrance(false)
      filter(searchedMovie, true, savedMovie)
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
        savedMovie={savedMovie}
      />
      <MoviesCardList
        movies={filtredMovies}
        onDelete={onDelete}
        firstEntrance={firstEntrance}
      />
    </>
  )
}

export default SavedMovies;
