import "./MoviesCard.css";

export function MovieCard({ title = "33 слова о дизайне", time = "1ч 42м", cardImgUrl = "/images/33-movie-pic.jpg", Icon, iconProps }) {

    return (
        <>
            <li className="card card_container">

                <img src={cardImgUrl} className="card__image" alt="картинка фильма" />
                <div className="card__container">
                    <div className="card__title-block">
                        <h2 className="card__title">{title}</h2>
                        <button type="button" className="card__delete-button">
                            {Icon && <Icon {...iconProps} />}
                        </button>
                    </div>
                    <span className="card__time">{time}</span>
                </div>
            </li>
        </>
    );
}

export default MovieCard;
