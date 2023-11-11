import "./FilterCheckbox.css";

export function FilterCheckbox({ isCheck, changeShort, firstEntrance }) {//onFilter, isShortMovies 
    return (
        <form className={`filter ${firstEntrance && filter_disabled} `}>
            <input
                onChange={() => changeShort()}
                // onChange={onFilter}
                // checked={isShortMovies}
                className="filter__checkbox"
                type="checkbox"
            ></input>

            <svg className="filter__checkbox" xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 36 20" fill="none">
                <g id="smalltumb">
                    <rect
                        className={`filter__checkbox-rect ${!isCheck ? 'filter__checkbox-rect_active' : ''} `}
                        x="1" y="3" width="34" height="14" rx="7" fill="#2BE080"
                        id="tumb_on"
                    />
                    <circle
                        className={`filter__checkbox-circl ${!isCheck ? 'filter__checkbox-circl_active' : ''} `}
                        cx="28" cy="10" r="5" fill="white" />
                </g>
            </svg>
            <span className="filter__title">Короткометражки</span>
        </form>
    );
}

export default FilterCheckbox;
