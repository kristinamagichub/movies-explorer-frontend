import MoviesCard from "@/components/MoviesCard";
// import Preloader from "@/components/Preloader/Preloader"
import "./MoviesCardList.css";

import {
  EmailRegex,
  MaxScreen, //! do 8str not v
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from '../../utils/constants';
import { useEffect, useState } from "react";
import Preloader from "../Preloader";


export default function MoviesCardList({ movies, onDelete, addMovie, savedMovies, isLoading, serverError, firstEntrance }) {
  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const fact = movies.slice(0, count)

  function printCards() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printCards().step)
  }

  return (
    <section className="  " >
      <ul className="cards__list">
        {isLoading ? <Preloader /> :
          (pathname === '/movies' && fact.length !== 0) ?
            fact.map(data => {
              return (
                <MoviesCard
                  key={data.id}
                  savedMovies={savedMovies}
                  addMovie={addMovie}
                  data={data}
                />
              )
            }) : movies.length !== 0 ?
              movies.map(data => {
                return (
                  <MoviesCard
                    key={data.id}
                    onDelete={onDelete}
                    data={data}
                  />
                )
              }) : serverError ?
                <span className="cards__search-error">"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"</span>
                : !firstEntrance ?
                  <span className="cards__search-error">Ничего не найдено</span>
                  : pathname === '/movies' ?
                    <span className="cards__search-error">Чтобы увидеть список фильмов выполните поиск</span>
                    :
                    <span className="cards__search-error">Нет сохраненных фильмов</span>
        }
      </ul>
      {pathname === '/movies' && <button onClick={ } className={`cards__more ${count >= movies.length && 'cards__more_hidden'} `} type="button" > </button>} //! dode todo
    </section>
  );
}
