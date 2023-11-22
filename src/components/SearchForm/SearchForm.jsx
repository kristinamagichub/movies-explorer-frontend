import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export function SearchForm({
  isShortMovies,
  getSearchFilterMovie,
  onFilterMovies,
}) {
  const [request, setRequest] = useState("");
  const [isQueryError, setisQueryError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("moviesQuery")
    ) {
      const localRequest = localStorage.getItem("moviesQuery");
      setRequest(localRequest);
    }
  }, [location]);

  function getSubmitUserInfo(e) {
    e.preventDefault();
    if (request.trim().length === 0) {
      setisQueryError(true);
    } else {
      setisQueryError(false);
      getSearchFilterMovie(request);
    }
  }

  function getChangeInputInfo(e) {
    setRequest(e.target.value);
  }

  return (
    <section className="search">
      <form className="search__form" id="form" onSubmit={getSubmitUserInfo}>
        <input
          name="query"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          onChange={getChangeInputInfo}
          value={request || ""}
        />

        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
      <FilterCheckbox
        isShortMovies={isShortMovies}
        onFilterMovies={onFilterMovies}
      />

      {isQueryError && (
        <span className="search__form-error">Введите ключевое слово</span>
      )}

      <div className="search__border-bottom"></div>
    </section>
  );
}

export default SearchForm;
