import "./FilterCheckbox.css";

export function FilterCheckbox({ onFilter, isShortMovies }) {
    return (
        <form className="filter">
            <span className="filter__title">Короткометражки</span>

            <input
                className="filter__checkbox"
                type="checkbox"
                onChange={onFilter}
                checked={isShortMovies}
            ></input>
        </form>
    );
}

export default FilterCheckbox;
