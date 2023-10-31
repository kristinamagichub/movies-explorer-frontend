import { useState, useContext } from "react";
// import Preloader from '@/components/Preloader';
import SearchForm from "@/components/SearchForm";
import MoviesCardList from "@/components/MoviesCardList";
import SearchError from "@/components/SearchError";
import { LikeIcon, DeleteIcon } from "@/components/Icons";
import { SavedMoviesDispatchContext } from "../../savedMoviesContext";

import "../movies/movies.css";

function getRandomInt(min, max) {
  const minN = Math.ceil(min);
  const maxN = Math.floor(max);
  return Math.floor(Math.random() * (maxN - minN) + minN); // The maximum is exclusive and the minimum is inclusive
}

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const genArr = (length) =>
  Array(length).fill({
    id: "",
    title: "33 слова о дизайне",
    time: "1ч 42м ",
    cardImgUrl: "/images/33-movie-pic.jpg",
    Icon: LikeIcon,
    iconProps: {
      isPrimary: false,
    },
  });

export function Movies({}) {
  const [length, setLength] = useState(16);
  const dispatch = useContext(SavedMoviesDispatchContext);

  function handleAddSavedMovie(id) {
    dispatch({
      type: "added",
      id,
      title: "33 слова о дизайне",
      time: "1ч 42м ",
      cardImgUrl: "/images/33-movie-pic.jpg",
      Icon: DeleteIcon,
    });
  }

  function handleDeleteSavedMovie(moviedId) {
    dispatch({
      type: "deleted",
      id: moviedId,
    });
  }

  const preArr = genArr(length);
  const arr = preArr.map((item) => {
    const newItem = { ...item, id: generateKey(getRandomInt(1, 999999999999)) };
    return newItem;
  });
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <section className="cards">
        {/* <Preloader /> */}

        <SearchError errorText={"Ничего не найдено"} />

        <SearchError
          errorText={
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          }
        />

        <MoviesCardList
          listArr={arr}
          handleAdd={handleAddSavedMovie}
          handleDelete={handleDeleteSavedMovie}
          isDeleteAction={false}
        />

        <div className="cards__button-container">
          <button
            onClick={() => {
              setLength(length + 4);
            }}
            className="cards__button"
          >
            Ещё
          </button>
        </div>
      </section>
    </section>
  );
}

export default Movies;
