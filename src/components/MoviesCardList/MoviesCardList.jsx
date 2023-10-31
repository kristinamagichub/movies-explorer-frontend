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
      {listArr.map(({ id, title, time, cardImgUrl, Icon, iconProps }) => (
        <MoviesCard
          key={id}
          id={id}
          title={title}
          time={time}
          cardImgUrl={cardImgUrl}
          Icon={Icon}
          iconProps={iconProps}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          isDeleteAction={isDeleteAction}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
