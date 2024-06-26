import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


export function SearchForm() {
    return (
        <section className="search">
            <form className="search__form" id="form">
                <input
                    name="query"
                    className="search__input"
                    id="search-input"
                    type="text"
                    required
                    placeholder="Фильм"
                />
                <span className="search__input-error">Ничего не найдено</span>
                <button className="search__button" type="submit">
                    Найти
                </button>

            </form>
            <FilterCheckbox />

            <div className="search__border-bottom"></div>
        </section>
    );
}

export default SearchForm;

