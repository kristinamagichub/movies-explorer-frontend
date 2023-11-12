import MoviesCard from "@/components/MoviesCard";
// import Preloader from "@/components/Preloader/Preloader"

import "./MoviesCardList.css";

export function MoviesCardList({
  listArr,
  handleAdd,
  handleDelete,
  isDeleteAction,
}) {
  return (
    <ul className="cards__list">
      {listArr.map((movie) => (
        <MoviesCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          time={movie.time}
          cardImgUrl={movie.cardImgUrl}
          Icon={movie.Icon}
          iconProps={movie.iconProps}
          handleAdd={handleAdd}
          movie={movie}
          handleDelete={handleDelete}
          isDeleteAction={isDeleteAction}
          trailerLink={movie.trailerLink}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
