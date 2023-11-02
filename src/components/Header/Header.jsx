import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/images/logo.svg";
import Navigation from "@/components/Navigation";
import HeaderAccountButton from "@/components/HeaderAccountButton";

import "./Header.css";

export function Header({ isLoggedIn, setIsLoggedIn, isPrimary }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function toggleOpen() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header className={`header ${isPrimary ? "header_primary" : ""} `} id="header">
            <div className="header__container container">
                <Link to="/" className="form-logo">
                    <img src={logo} alt="логотип сайта" />
                </Link>

                {isLoggedIn && (
                    <div className="header-button-group">
                        <div className="header-button-group__nav">
                            <NavLink
                                to="/movies"
                                className={({ isActive }) =>
                                    [isActive ? "header__button_active" : "", isPrimary ? "header__button_primary" : "", "header__button"].join(" ")
                                }
                            >
                                Фильмы
                            </NavLink>
                            <NavLink
                                to="saved-movies"
                                className={({ isActive }) =>
                                    [isActive ? "header__button_active" : "", isPrimary ? "header__button_primary" : "", "header__button"].join(" ")
                                }
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </div>
                    </div>
                )}
                {isLoggedIn && (
                    <div className={`header-button-group`}   >
                        <HeaderAccountButton isPrimary={isPrimary} toggleOpen={toggleOpen} />
                    </div>
                )}
                {!isLoggedIn && (
                    <div className="header-button-group" onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
                        <Link onClick={(e) => e.preventDefault()} to="/signup" className={`header__button header__button_reg  ${isPrimary && "header__button_primary"}`}>
                            Регистрация
                        </Link>
                        <Link onClick={(e) => e.preventDefault()} to="/signin" className={`header__button header__button-green ${isPrimary && "header__button_primary"}`} >
                            Войти
                        </Link>
                    </div>
                )}
                {isNavOpen && <Navigation isPrimary={isPrimary} toggleOpen={toggleOpen} />}
            </div>
        </header>
    )
}

export default Header;
