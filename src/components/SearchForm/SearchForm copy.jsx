import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import useFormValidation from "@/utils/useFormValidation";


export function SearchForm({
    isCheck,
    searchMovies,
    searchedMovie,
    changeShort,
    setIsError,
    firstEntrance,
    savedMovie
}) {
    const { pathname } = useLocation();
    const setIsError = useContext(ErrorContext)
    const { values, handleChange, reset } = useFormValidation();

    useEffect(() => {
        if ((pathname === '/saved-movies' && savedMovie.lenght === 0)) {
            reset({ search: '' })
        } else {
            reset({ search: searchedMovie })
        }
        setIsError(false)
    }, [searchedMovie, reset, setIsError, pathname, savedMovie])


    function onSubmit(evt) {
        evt.preventDefault()
        if (evt.target.search.value) {
            searchMovies(evt.target.search.value)
            setIsError(false)
        } else {
            setIsError(true)
        }
    }

    return (
        <section className="search">
            <form onSubmit={onSubmit} className="search__form" id="form" name={'SearchForm'}>
                <input
                    name="query"
                    className="search__input"
                    id="search-input"
                    type="text"
                    required
                    placeholder="Фильм"
                    onChange={(evt) => {
                        handleChange(evt)
                        setIsError(false)
                    }}
                    value={values.search || ''}
                    disabled={savedMovie ? (savedMovie.lenght === 0 && true) : false}
                />
                <span className="search__input-error">Ничего не найдено</span>
                {/* <button className="search__button" type="submit"> */}
                <button className={`search__submit ${savedMovie ? (pathname === '/saved-movies' && savedMovie.lenght === 0) && 'search__submit_disabled' : ''}  `} type="submit">
                    Найти
                </button>
            </form>
            <span className={`search__error ${isError && 'search__error_active'}`}>{'Введите ключевое слово'}</span>
            <FilterCheckbox isCheck={isCheck} changeShort={changeShort} firstEntrance={firstEntrance} />

            <div className="search__border-bottom"></div>
        </section>
    );
}

export default SearchForm;

