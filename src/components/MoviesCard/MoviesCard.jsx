import "./MoviesCard.css";

export function MovieCard({
  id,
  movie,
  title,
  time,
  cardImgUrl,
  handleAdd,
  handleDelete,
  Icon,
  isDeleteAction, //TODO: rename
  iconProps,
}) {
  return (
    <li className="card card_container">
      <img src={cardImgUrl} className="card__image" alt="картинка фильма" />
      <div className="card__container">
        <div className="card__title-block">
          <h2 className="card__title">{title}</h2>
          <button
            type="button"
            onClick={() => {
              isDeleteAction ? handleDelete(id) : handleAdd(id, movie);
            }}
            className="card__delete-button"
          >
            {Icon && <Icon {...iconProps} />}
          </button>
        </div>
        <span className="card__time">{time}</span>
      </div>
    </li>
  );
}

export default MovieCard;
