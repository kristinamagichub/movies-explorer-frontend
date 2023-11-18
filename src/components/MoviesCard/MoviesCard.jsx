import React from "react";
import "./MoviesCard.css";
import { durationConverterMovie } from "../../utils/utils";

export function MovieCard({
  card,
  isSavedFilms,
  savedMovies,
  saved,
  handleLikeFilm,
  onDeleteCard,
}) {
  function onDelete() {
    onDeleteCard(card);
  }

  function onCardClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeFilm(card);
    }
  }

  const cardLikeButtonClassName = `${
    saved ? "card__like-button card__like-button_active" : "card__like-button"
  }`;

  return (
    <li className="card card_container" key={card.id}>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          alt={card.nameRU}
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </a>

      <div className="card__container">
        <div className="card__title-block">
          <h2 className="card__title">{card.nameRU}</h2>
          {isSavedFilms ? (
            <button
              type="button"
              className="card__delete-button"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={onCardClick}
            ></button>
          )}
        </div>
        <span className="card__time">
          {" "}
          {durationConverterMovie(card.duration)}
        </span>
      </div>
    </li>
  );
}

export default MovieCard;
