import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";

// import Preloader from '@/components/Preloader';
import SearchForm from "@/components/SearchForm";
import MoviesCardList from "@/components/MoviesCardList";
import SearchError from "@/components/SearchError";
import { LikeIcon, DeleteIcon } from "@/components/Icons";
import { SavedMoviesDispatchContext } from "../../savedMoviesContext";

import "../movies/movies.css";

// function getRandomInt(min, max) {
//   const minN = Math.ceil(min);
//   const maxN = Math.floor(max);
//   return Math.floor(Math.random() * (maxN - minN) + minN); // The maximum is exclusive and the minimum is inclusive
// }

// const generateKey = (pre) => {
//   return `${pre}_${new Date().getTime()}`;
// };

// const genArr = (length) =>
//   Array(length).fill({
//     id: "",
//     title: "33 слова о дизайне",
//     time: "1ч 42м ",
//     cardImgUrl: "/images/33-movie-pic.jpg",
//     Icon: LikeIcon,
//     iconProps: {
//       isPrimary: false,
//     },
//   });

function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h${minutes > 0 ? `${minutes}m` : ''}`;
}

const getNewStruct = (arr, length) => {
  const newArr = arr.slice(0, length)
  return newArr.map((movie) => ({
    id: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    title: movie.nameRU,
    time: toHoursAndMinutes(movie.duration),
    cardImgUrl: `https://api.nomoreparties.co/${movie.image.url}`,
    Icon: LikeIcon,
    iconProps: {
      isPrimary: false,
    },
    director: movie.director,
    country: movie.country,
    year: movie.year,
    duration: movie.duration,
    description: movie.description,
    trailerLink: movie.trailerLink,
    image: movie.image,
    thumbnail: movie.trailerLink
  }));
}

async function addMovie(url = "", data = {}) {
  console.log(" addlike")
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTIyZmUyYzkwZGMxMmZiMzc5MmZlZWMiLCJpYXQiOjE2OTY4NTIzMDN9.AHCOoQmNzwc8n6yqetE5oy4vm5JV5vMXZHvOe5XayoQ"
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export function Movies({ }) {
  const [length, setLength] = useState(16);
  const dispatch = useContext(SavedMoviesDispatchContext);
  const movies = useLoaderData();


  function handleAddSavedMovie(id, movie) {
    console.log(movie, "movie")
    const baseUrl = "https://api.nomoreparties.co";
    dispatch({
      type: "added",
      id,
      title: "33 слова о дизайне",
      time: "1ч 42м ",
      cardImgUrl: "/images/33-movie-pic.jpg",
      Icon: DeleteIcon,
    });
    addMovie("http://localhost:3000/movies", {
      "movieId": id,
      "nameRU": movie.nameRU,
      "nameEN": movie.nameEN,
      "director": movie.director,
      "country": movie.country,
      "year": movie.year,
      "duration": movie.duration,
      "description": movie.description,
      "trailerLink": movie.trailerLink,
      "image": `${baseUrl}${movie.image.url}`,
      "thumbnail": movie.trailerLink
    }).then((data) => {
      console.log(data);
    });

  }

  function handleDeleteSavedMovie(moviedId) {
    dispatch({
      type: "deleted",
      id: moviedId,
    });
  }

  // const preArr = genArr(length);
  // const arr = preArr.map((item) => {
  //   const newItem = { ...item, id: generateKey(getRandomInt(1, 999999999999)) };
  //   return newItem;
  // });
  const newArr = getNewStruct(movies)
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
          // listArr={arr}
          listArr={newArr}
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
