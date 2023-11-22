import React from "react";
import { Link, NavLink } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import logo from "../../assets/images/logo.svg";
import account from "../../assets/images/account_check_icon.svg";
import menu from "../../assets/images/menu-button.svg";

import "./Header.css";

export function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false);

  // Changing the active button
  const setActiveButton = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button";

  // Menu opening
  function handleOpen() {
    setIsClicked(true);
  }

  // Menu closing
  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__button-wrapper">
            <Link to="/signup" className="header__button header__button-shadow">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header header_secondary" id="header-gray">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__button-wrapper header__button-wrapper_films">
            <NavLink to="/movies" className={setActiveButton}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={setActiveButton}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-wrapper">
            <Link to="/profile" className="header__account-button">
              <div className="header__account-image-wrapper">
                <span className="header__account-text">Аккаунт</span>
                <img
                  className="header__account-image"
                  src={account}
                  alt="account pic"
                />
              </div>
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="menu" />
            </button>
          </div>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
