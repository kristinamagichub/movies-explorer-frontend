import MoviesCard from "@/components/MoviesCard"
// import Preloader from "@/components/Preloader/Preloader"

import "./MoviesCardList.css";

export function MoviesCardList({ listArr }) {

    return (
        <ul className="cards__list">
            {listArr.map(({ ...args }) => (<MoviesCard key={args.id} {...args} />))}
        </ul>
    )
}

export default MoviesCardList;
