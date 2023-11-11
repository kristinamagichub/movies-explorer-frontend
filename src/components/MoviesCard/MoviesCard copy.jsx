import "./MoviesCard.css";

export function MovieCard({ onDelete, addMovie, data, savedMovies }) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, pathname, data.id, setClick]);

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  function toHoursAndMinutes(totalMinutes) {  //!duration
    const hours = Math.floor(totalMinutes / 60);  //!duration
    const minutes = totalMinutes % 60;                 //!duration
    return `${hours}h${minutes > 0 ? `${minutes}m` : ''}`;
  }

  //!dode an way 
  return (
    <li className="card card_container">
      <img src={cardImgUrl} className="card__image" alt="картинка фильма" />
      <div className="card__container">
        <div className="card__title-block">
          <h2 className="card__title">{data.nameRU}</h2>

          {pathname === '/movies'}
          <button
            type="button"
            onClick={() => {
              isDeleteAction ? handleDelete(id) : handleAdd(id);
            }}

            onClick={onClick} //!через тернарный
            className="card__delete-button"
          >
            {Icon && <Icon {...iconProps} />}
          </button>
        </div>
        <span className="card__time">{toHoursAndMinutes(data.totalMinutes)}</span>   //!duration
      </div>
    </li>
  );
}

export default MovieCard;
