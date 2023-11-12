import { Link } from "react-router-dom";
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
  trailerLink
}) {
  // const openTrailer= () => {


  return (
    <Link target="_blank" to={trailerLink} className="card card_container">
      <img src={cardImgUrl} className="card__image" alt="картинка фильма" />
      <div className="card__container">
        <div className="card__title-block">
          <h2 className="card__title">{title}</h2>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()

              isDeleteAction ? handleDelete(id) : handleAdd(id, movie);
            }}
            className="card__delete-button"
          >
            {Icon && <Icon {...iconProps} />}
          </button>
        </div>
        <span className="card__time">{time}</span>
      </div>
    </Link>
  );
}

export default MovieCard;


//   < iframe width = "560" height = "315" src = { trailerLink } title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe >