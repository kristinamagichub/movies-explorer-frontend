import { useState } from 'react';
// import Preloader from '@/components/Preloader';
import SearchForm from '@/components/SearchForm';
import MoviesCardList from '@/components/MoviesCardList';
import SearchError from '@/components/SearchError';
import { LikeIcon } from "@/components/Icons"

import "../movies/movies.css";


function getRandomInt(min, max) {
    const minN = Math.ceil(min);
    const maxN = Math.floor(max);
    return Math.floor(Math.random() * (maxN - minN) + minN); // The maximum is exclusive and the minimum is inclusive
}

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
}

const genArr = (length) => Array(16).fill({
    id: generateKey(getRandomInt(1, 999999999999)),
    title: "33 слова о дизайне",
    time: "1ч 42м ",
    cardImgUrl: "/images/33-movie-pic.jpg",
    Icon: LikeIcon,
    iconProps: {
        // isPrimary: true
        isPrimary: false  //!
    }
});

export function Movies({ }) {
    const [length, setLength] = useState(16);
    const arr = genArr(length);
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

                <MoviesCardList listArr={arr} />


                <div className="cards__button-container">
                    <button onClick={() => { setLength(length + 4) }} className="cards__button">Ещё</button>
                </div>
            </section>
        </section>
    );
}

export default Movies;
