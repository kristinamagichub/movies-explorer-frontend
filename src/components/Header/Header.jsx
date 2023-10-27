import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import Navigation from "@/components/Navigation";
import HeaderAccountButton from "@/components/HeaderAccountButton";
import "./Header.css";

export function Header({ isLoggedIn, setIsLoggedIn, isPrimary }) {
    const [isClicked, setIsClicked] = useState(false);

    function toggleOpen() {
        setIsClicked(!isClicked)
    }

    return (
        <>
            <header className={`header ${isPrimary && "header_primary"} `} id="header">
                <Link to="/" className="form__logo">
                    <img src={logo} alt="логотип сайта" />
                </Link>

                {isLoggedIn && (
                    <div className="header__button-container">
                        <div className="header__button-container_films">
                            <NavLink
                                to="/movies"
                                className={({ isActive }) =>
                                    [isActive && "header__button_active", isPrimary && "header__button_primary", "header__button"].join(" ")
                                }
                            >
                                Фильмы
                            </NavLink>
                            <NavLink
                                to="saved-movies"
                                className={({ isActive }) =>
                                    [isActive && "header__button_active", isPrimary && "header__button_primary", "header__button"].join(" ")
                                }
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </div>
                    </div>
                )}
                {isLoggedIn && (
                    <div className={`header__button-container  `}   >
                        <HeaderAccountButton isPrimary={isPrimary} toggleOpen={toggleOpen} />
                    </div>

                )}
                {!isLoggedIn && (
                    <div className="header__button-container" onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
                        <Link onClick={(e) => e.preventDefault()} to="/signup" className={`header__button header__button_reg  ${isPrimary && "header__button_primary"}`}>
                            Регистрация
                        </Link>
                        <Link onClick={(e) => e.preventDefault()} to="/signin" className={`header__button header__button-green ${isPrimary && "header__button_primary"}`} >
                            Войти
                        </Link>
                    </div>
                )}
                {isClicked && <Navigation isPrimary={isPrimary} toggleOpen={toggleOpen} />}
            </header>
        </>
    )
}

export default Header;
