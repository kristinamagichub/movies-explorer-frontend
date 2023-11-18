import "./FilterCheckbox.css";

export function FilterCheckbox({ onFilterMovies, isShortMovies }) {
  return (
    <form className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilterMovies}
        checked={isShortMovies}
      ></input>
      <span className="filter__title">Короткометражки</span>
    </form>
  );
}

export default FilterCheckbox;
