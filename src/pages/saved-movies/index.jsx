// import Preloader from '@/components/Preloader';
import SearchForm from '@/components/SearchForm';
import MoviesCardList from '@/components/MoviesCardList';
import { DeleteIcon } from "@/components/Icons"


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
    Icon: DeleteIcon
});

export function SavedMovies({ }) {

    const arr = genArr(length);
    return (
        <section className="movies movies-saved">
            <SearchForm />
            {/* <Preloader /> */}
            <section className="cards">

                <MoviesCardList listArr={arr} />

            </section>
        </section >
    )
}

export default SavedMovies;
