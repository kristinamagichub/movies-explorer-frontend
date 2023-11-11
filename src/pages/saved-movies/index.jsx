import { useContext } from "react";

// import Preloader from '@/components/Preloader';
import SearchForm from "@/components/SearchForm";
import MoviesCardList from "@/components/MoviesCardList";

import {
  SavedMoviesContext,
  SavedMoviesDispatchContext,
} from "../../savedMoviesContext";

export function SavedMovies({ }) {
  const movies = useContext(SavedMoviesContext);

  const dispatch = useContext(SavedMoviesDispatchContext);

  function handleDeleteSavedMovie(moviedId) {
    dispatch({
      type: "deleted",
      id: moviedId,
    });
  }

  return (
    <section className="movies movies-saved">
      <SearchForm />
      {/* <Preloader /> */}
      <section className="cards">
        <MoviesCardList
          listArr={movies}
          handleDelete={handleDeleteSavedMovie}
          isDeleteAction={true}
        />
      </section>
    </section>
  );
}

export default SavedMovies;
