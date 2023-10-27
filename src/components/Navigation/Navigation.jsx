import { NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "@/assets/images/profile.svg";
import HeaderAccountButton from "@/components/HeaderAccountButton";


export function Navigation({ isPrimary, toggleOpen }) {
    return (
        <div className="navigation__page-overlay">
            <div className="navigation__overlay-container"></div>
            <div className="navigation__menu">
                <button
                    className="navigation__close-button"
                    onClick={toggleOpen}
                >  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="black" />
                        <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="black" />
                    </svg>  </button>
                <nav className="navigation__links">
                    <NavLink
                        exact
                        to="/"
                        className={({ isActive }) =>
                            [isActive ? "navigation__link_active" : "", "navigation__link"].join(" ")
                        }
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            [isActive ? "navigation__link_active" : "", "navigation__link"].join(" ")
                        }
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        to="/saved-movies"
                        className={({ isActive }) =>
                            [isActive ? "navigation__link_active" : "", "navigation__link"].join(" ")
                        }
                    >
                        Сохранённые фильмы
                    </NavLink>
                </nav>
                <HeaderAccountButton isPrimary={isPrimary} toggleOpen={toggleOpen} menuUrl={account} className="navigation__account-button" />

            </div>
        </div>
    );
}

export default Navigation;